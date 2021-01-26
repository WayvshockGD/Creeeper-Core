class Command {
    name: String
    aliases: String[]
    Description: String
    Usage: String
    Category: String
    Permissions: String[]
    RequiredArguments: Number
    Cooldown: Number
    hidden: Boolean

    constructor(command: any) {
        
        this.name = command || '';
        this.aliases = command || [];
        this.Description = command || '';
        this.Usage = command || '';
        this.hidden = command || false;
        this.Cooldown = command || 60000;
        this.Category = command || '';
        this.RequiredArguments = command || 0;
    }
}

export = Command;