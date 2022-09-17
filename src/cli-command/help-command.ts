import { CliCommandInterface } from './cli-command.interface.js';
import chalk from 'chalk';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
        ${chalk.yellow('Программа для подготовки данных для REST API сервера.')}
        ${chalk.bgGreen('Пример:')}
            main.js --<command> [--arguments]
        ${chalk.bgGreen('Команды:')}
            ${chalk.blue('--version:')}                   # выводит номер версии
            ${chalk.blue('--help:')}                      # печатает этот текст
            ${chalk.blue('--import <path>:')}             # импортирует данные из TSV
            ${chalk.blue('--generator <n> <path> <url>')} # генерирует произвольное количество тестовых данных
        `);
  }
}
