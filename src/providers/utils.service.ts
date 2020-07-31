import * as _ from 'lodash';

export class UtilsService {
  /**
   * convert schema to dto class instance
   * @param {{new(schema: E, options: any): T}} model
   * @param {E[] | E} schema
   * @param options
   * @returns {T[] | T}
   */
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E,
    options?: any,
  ): T;
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E[],
    options?: any,
  ): T[];
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E | E[],
    options?: any,
  ): T | T[] {
    if (_.isArray(entity)) {
      return (entity as E[]).map((u) => new model(u, options));
    }

    return new model(entity as E, options);
  }
}
