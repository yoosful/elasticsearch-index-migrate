import { Command, flags } from '@oclif/command';

export default class Recovery extends Command {
    static description = 'describe the command here';

    static examples = [`$ mynewcli hello hello world from ./src/hello.ts!`];

    static flags = {
        help: flags.help({ char: 'h' }),
        // flag with a value (-n, --name=VALUE)
        name: flags.string({ char: 'n', description: 'name to print' }),
        // flag with no value (-f, --force)
        force: flags.boolean({ char: 'f' })
    };

    static args = [{ name: 'file' }];

    async run() {
        const { args, flags } = this.parse(Recovery);

        this.log(`plan`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
