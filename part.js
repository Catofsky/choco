
const fs = require('fs');

var args = {};
var flags = [];

var config = {
    src: 'src',
    pug_includes: 'src/view/_parts_includes.pug',
    sass_includes: 'src/sass/_parts.sass',
    dist_coffee: 'dist/coffee/parts'
};

var main = function (params) {

    for (var i = 2; i < params.length; i++) {

        if (params[i].indexOf('=') >= 0) {
            var p = params[i].split('=');
            args[p[0]] = p[1];
        }
        else {
            flags.push(params[i]);
        }
    
    }
    
    if (flags.indexOf('c') >= 0 || flags.indexOf('create') >= 0) {
        if (args.name) {

            if (fs.existsSync(config.src + '/parts/' + args.name)) {
                console.log('The part ' + args.name + ' already exists');
            }
            else {
                create_part(args.name);
                console.log('The part ' + args.name + ' has been created!');
            }
            
        }
        else {
            console.log('Indicate tne name of part via "name=<part_name>"');
        }
    }

    if (flags.indexOf('rm') >= 0 || flags.indexOf('remove') >= 0) {
        if (args.name) {

            if (!fs.existsSync(config.src + '/parts/' + args.name)) {
                console.log('The part ' + args.name + ' doesn\'n exists');
            }
            else {
                remove_folder(config.src + '/parts/' + args.name);
                remove_includes(args.name);
                remove_folder(config.dist_coffee + args.name);
                console.log('The part ' + args.name + ' has been removed');
            }
        }
        else {
            console.log('Indicate tne name of part via "name=<part_name>"');
        }
    }
}

var remove_includes = function (name) {
    remove_line(config.pug_includes, 'include ../parts/' + name + '/' + name + '.pug');
    remove_line(config.sass_includes, '@import "../parts/' + name + '/' + name + '.sass"');
};

var remove_folder = function(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                remove_folder(curPath);
            }
            else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

var wrtie_file = function (file, content) {
    fs.writeFile(file, content, { flag: 'wx' }, function(err) {
        if (err) {
            return console.log(err);
        }
    });
};

var append_file = function (file, content) {
    fs.appendFile(file, content, function (err) {
        if (err) {
            return console.log(err);
        }
    });
};

var remove_line = function (filename, line) {
    fs.readFile(filename, 'utf8', function(err, data)
    {
        if (err) {
            return console.log(err);
        }
        var lines = data.split('\n');
        var num = lines.indexOf(line);

        if (num < 0)
            return console.log('Line not found');

        delete lines[num];
        var linesExceptFirst = lines.join('\n');
        fs.writeFile(filename, linesExceptFirst, function(err) {
            if (err) {
                return console.log(err);
            }
        });
    });
};

var create_part = function (name) {
    name = name.toLowerCase();

    var path = config.src + '/'     // src folder
        + 'parts/'                  // parts folder
        + name + '/'                // part name folder
        + name                      // filename

    if (!fs.existsSync(config.src + '/parts/' + name)) {
        fs.mkdirSync(config.src + '/parts/' + name);
    }

    wrtie_file(
        path + '.coffee',
        '\ncfg = {}\n\nwindow.parts.' + name + ' = (config) ->\n\tcfg = config\n\n'
    );

    wrtie_file(
        path + '.sass',
        '\n.part_' + name + '\n'
    );

    wrtie_file(
        path + '.pug',
        '\nmixin part_' + name + '(params)\n\t.part_' + name + '\n'
    );

    append_file(config.pug_includes, 'include ../parts/' + name + '/' + name + '.pug\n');
    append_file(config.sass_includes, '@import "../parts/' + name + '/' + name + '.sass"\n');

};

main(process.argv);