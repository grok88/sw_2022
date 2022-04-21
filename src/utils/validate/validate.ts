export const required = (value: string) => (value ? undefined : 'Required');

export const composeValidators = (...validators: any) => (value: any) =>
    validators.reduce((error: any, validator: any) => error || validator(value), undefined);

export const maxLengthCreator = (max: number) => (value: string) => {
    return value.length <= max ? undefined : `Should be less than ${max}`;
}