
export declare abstract class Controller {
    abstract perform(input: any): Promise<string | Error>;
    handle(input: any): Promise<string>;
    private validate;
}
