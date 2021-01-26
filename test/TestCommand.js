let { Command } = require('../typings/index');

class TestCommand extends Command {
    constructor(...args) {
        super(...args);

        this.name = 'test',
        this.Description = 'yes',
        this.Usage = 'test',
        this.aliases = [ 't' ],
        this.Category = 'no',
        this.Permissions = [],
        this.hidden = true,
        this.Cooldown = 0,
        this.RequiredArguments = 0
    }
}

module.exports = TestCommand;