
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sprint
 * 
 */
export type Sprint = $Result.DefaultSelection<Prisma.$SprintPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskAssignment
 * 
 */
export type TaskAssignment = $Result.DefaultSelection<Prisma.$TaskAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PARENT: 'PARENT',
  TEEN: 'TEEN',
  CHILD: 'CHILD'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TaskStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sprint`: Exposes CRUD operations for the **Sprint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sprints
    * const sprints = await prisma.sprint.findMany()
    * ```
    */
  get sprint(): Prisma.SprintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskAssignment`: Exposes CRUD operations for the **TaskAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskAssignments
    * const taskAssignments = await prisma.taskAssignment.findMany()
    * ```
    */
  get taskAssignment(): Prisma.TaskAssignmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sprint: 'Sprint',
    Task: 'Task',
    TaskAssignment: 'TaskAssignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sprint" | "task" | "taskAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sprint: {
        payload: Prisma.$SprintPayload<ExtArgs>
        fields: Prisma.SprintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SprintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SprintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          findFirst: {
            args: Prisma.SprintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SprintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          findMany: {
            args: Prisma.SprintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>[]
          }
          create: {
            args: Prisma.SprintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          createMany: {
            args: Prisma.SprintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SprintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>[]
          }
          delete: {
            args: Prisma.SprintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          update: {
            args: Prisma.SprintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          deleteMany: {
            args: Prisma.SprintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SprintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SprintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>[]
          }
          upsert: {
            args: Prisma.SprintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          aggregate: {
            args: Prisma.SprintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSprint>
          }
          groupBy: {
            args: Prisma.SprintGroupByArgs<ExtArgs>
            result: $Utils.Optional<SprintGroupByOutputType>[]
          }
          count: {
            args: Prisma.SprintCountArgs<ExtArgs>
            result: $Utils.Optional<SprintCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskAssignment: {
        payload: Prisma.$TaskAssignmentPayload<ExtArgs>
        fields: Prisma.TaskAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          findFirst: {
            args: Prisma.TaskAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          findMany: {
            args: Prisma.TaskAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>[]
          }
          create: {
            args: Prisma.TaskAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          createMany: {
            args: Prisma.TaskAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>[]
          }
          delete: {
            args: Prisma.TaskAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          update: {
            args: Prisma.TaskAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.TaskAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.TaskAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          aggregate: {
            args: Prisma.TaskAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskAssignment>
          }
          groupBy: {
            args: Prisma.TaskAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<TaskAssignmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sprint?: SprintOmit
    task?: TaskOmit
    taskAssignment?: TaskAssignmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    children: number
    createdSprints: number
    createdTasks: number
    assignments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | UserCountOutputTypeCountChildrenArgs
    createdSprints?: boolean | UserCountOutputTypeCountCreatedSprintsArgs
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSprintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
  }


  /**
   * Count Type SprintCountOutputType
   */

  export type SprintCountOutputType = {
    tasks: number
  }

  export type SprintCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | SprintCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * SprintCountOutputType without action
   */
  export type SprintCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintCountOutputType
     */
    select?: SprintCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SprintCountOutputType without action
   */
  export type SprintCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    assignees: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignees?: boolean | TaskCountOutputTypeCountAssigneesArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAssigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    birthdate: Date | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    birthdate: Date | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    birthdate: number
    role: number
    createdAt: number
    updatedAt: number
    parentId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    birthdate?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    birthdate?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    birthdate?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    birthdate: Date
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    parentId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    birthdate?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    createdSprints?: boolean | User$createdSprintsArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    birthdate?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    birthdate?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    birthdate?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "birthdate" | "role" | "createdAt" | "updatedAt" | "parentId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    createdSprints?: boolean | User$createdSprintsArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parent: Prisma.$UserPayload<ExtArgs> | null
      children: Prisma.$UserPayload<ExtArgs>[]
      createdSprints: Prisma.$SprintPayload<ExtArgs>[]
      createdTasks: Prisma.$TaskPayload<ExtArgs>[]
      assignments: Prisma.$TaskAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      birthdate: Date
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      parentId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends User$parentArgs<ExtArgs> = {}>(args?: Subset<T, User$parentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends User$childrenArgs<ExtArgs> = {}>(args?: Subset<T, User$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSprints<T extends User$createdSprintsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSprintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly parentId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.parent
   */
  export type User$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.children
   */
  export type User$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.createdSprints
   */
  export type User$createdSprintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    where?: SprintWhereInput
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    cursor?: SprintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    cursor?: TaskAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Sprint
   */

  export type AggregateSprint = {
    _count: SprintCountAggregateOutputType | null
    _min: SprintMinAggregateOutputType | null
    _max: SprintMaxAggregateOutputType | null
  }

  export type SprintMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type SprintMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type SprintCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type SprintMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type SprintMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type SprintCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type SprintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprint to aggregate.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sprints
    **/
    _count?: true | SprintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SprintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SprintMaxAggregateInputType
  }

  export type GetSprintAggregateType<T extends SprintAggregateArgs> = {
        [P in keyof T & keyof AggregateSprint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSprint[P]>
      : GetScalarType<T[P], AggregateSprint[P]>
  }




  export type SprintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintWhereInput
    orderBy?: SprintOrderByWithAggregationInput | SprintOrderByWithAggregationInput[]
    by: SprintScalarFieldEnum[] | SprintScalarFieldEnum
    having?: SprintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SprintCountAggregateInputType | true
    _min?: SprintMinAggregateInputType
    _max?: SprintMaxAggregateInputType
  }

  export type SprintGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: SprintCountAggregateOutputType | null
    _min: SprintMinAggregateOutputType | null
    _max: SprintMaxAggregateOutputType | null
  }

  type GetSprintGroupByPayload<T extends SprintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SprintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SprintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SprintGroupByOutputType[P]>
            : GetScalarType<T[P], SprintGroupByOutputType[P]>
        }
      >
    >


  export type SprintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Sprint$tasksArgs<ExtArgs>
    _count?: boolean | SprintCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprint"]>

  export type SprintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprint"]>

  export type SprintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprint"]>

  export type SprintSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type SprintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["sprint"]>
  export type SprintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Sprint$tasksArgs<ExtArgs>
    _count?: boolean | SprintCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SprintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SprintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SprintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sprint"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["sprint"]>
    composites: {}
  }

  type SprintGetPayload<S extends boolean | null | undefined | SprintDefaultArgs> = $Result.GetResult<Prisma.$SprintPayload, S>

  type SprintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SprintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SprintCountAggregateInputType | true
    }

  export interface SprintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sprint'], meta: { name: 'Sprint' } }
    /**
     * Find zero or one Sprint that matches the filter.
     * @param {SprintFindUniqueArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SprintFindUniqueArgs>(args: SelectSubset<T, SprintFindUniqueArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sprint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SprintFindUniqueOrThrowArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SprintFindUniqueOrThrowArgs>(args: SelectSubset<T, SprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindFirstArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SprintFindFirstArgs>(args?: SelectSubset<T, SprintFindFirstArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindFirstOrThrowArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SprintFindFirstOrThrowArgs>(args?: SelectSubset<T, SprintFindFirstOrThrowArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sprints
     * const sprints = await prisma.sprint.findMany()
     * 
     * // Get first 10 Sprints
     * const sprints = await prisma.sprint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sprintWithIdOnly = await prisma.sprint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SprintFindManyArgs>(args?: SelectSubset<T, SprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sprint.
     * @param {SprintCreateArgs} args - Arguments to create a Sprint.
     * @example
     * // Create one Sprint
     * const Sprint = await prisma.sprint.create({
     *   data: {
     *     // ... data to create a Sprint
     *   }
     * })
     * 
     */
    create<T extends SprintCreateArgs>(args: SelectSubset<T, SprintCreateArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sprints.
     * @param {SprintCreateManyArgs} args - Arguments to create many Sprints.
     * @example
     * // Create many Sprints
     * const sprint = await prisma.sprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SprintCreateManyArgs>(args?: SelectSubset<T, SprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sprints and returns the data saved in the database.
     * @param {SprintCreateManyAndReturnArgs} args - Arguments to create many Sprints.
     * @example
     * // Create many Sprints
     * const sprint = await prisma.sprint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sprints and only return the `id`
     * const sprintWithIdOnly = await prisma.sprint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SprintCreateManyAndReturnArgs>(args?: SelectSubset<T, SprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sprint.
     * @param {SprintDeleteArgs} args - Arguments to delete one Sprint.
     * @example
     * // Delete one Sprint
     * const Sprint = await prisma.sprint.delete({
     *   where: {
     *     // ... filter to delete one Sprint
     *   }
     * })
     * 
     */
    delete<T extends SprintDeleteArgs>(args: SelectSubset<T, SprintDeleteArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sprint.
     * @param {SprintUpdateArgs} args - Arguments to update one Sprint.
     * @example
     * // Update one Sprint
     * const sprint = await prisma.sprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SprintUpdateArgs>(args: SelectSubset<T, SprintUpdateArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sprints.
     * @param {SprintDeleteManyArgs} args - Arguments to filter Sprints to delete.
     * @example
     * // Delete a few Sprints
     * const { count } = await prisma.sprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SprintDeleteManyArgs>(args?: SelectSubset<T, SprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sprints
     * const sprint = await prisma.sprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SprintUpdateManyArgs>(args: SelectSubset<T, SprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sprints and returns the data updated in the database.
     * @param {SprintUpdateManyAndReturnArgs} args - Arguments to update many Sprints.
     * @example
     * // Update many Sprints
     * const sprint = await prisma.sprint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sprints and only return the `id`
     * const sprintWithIdOnly = await prisma.sprint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SprintUpdateManyAndReturnArgs>(args: SelectSubset<T, SprintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sprint.
     * @param {SprintUpsertArgs} args - Arguments to update or create a Sprint.
     * @example
     * // Update or create a Sprint
     * const sprint = await prisma.sprint.upsert({
     *   create: {
     *     // ... data to create a Sprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sprint we want to update
     *   }
     * })
     */
    upsert<T extends SprintUpsertArgs>(args: SelectSubset<T, SprintUpsertArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintCountArgs} args - Arguments to filter Sprints to count.
     * @example
     * // Count the number of Sprints
     * const count = await prisma.sprint.count({
     *   where: {
     *     // ... the filter for the Sprints we want to count
     *   }
     * })
    **/
    count<T extends SprintCountArgs>(
      args?: Subset<T, SprintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SprintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SprintAggregateArgs>(args: Subset<T, SprintAggregateArgs>): Prisma.PrismaPromise<GetSprintAggregateType<T>>

    /**
     * Group by Sprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SprintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SprintGroupByArgs['orderBy'] }
        : { orderBy?: SprintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sprint model
   */
  readonly fields: SprintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sprint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SprintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Sprint$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Sprint$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sprint model
   */
  interface SprintFieldRefs {
    readonly id: FieldRef<"Sprint", 'String'>
    readonly name: FieldRef<"Sprint", 'String'>
    readonly startDate: FieldRef<"Sprint", 'DateTime'>
    readonly endDate: FieldRef<"Sprint", 'DateTime'>
    readonly createdAt: FieldRef<"Sprint", 'DateTime'>
    readonly updatedAt: FieldRef<"Sprint", 'DateTime'>
    readonly createdById: FieldRef<"Sprint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sprint findUnique
   */
  export type SprintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint findUniqueOrThrow
   */
  export type SprintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint findFirst
   */
  export type SprintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint findFirstOrThrow
   */
  export type SprintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint findMany
   */
  export type SprintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprints to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint create
   */
  export type SprintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The data needed to create a Sprint.
     */
    data: XOR<SprintCreateInput, SprintUncheckedCreateInput>
  }

  /**
   * Sprint createMany
   */
  export type SprintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sprints.
     */
    data: SprintCreateManyInput | SprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sprint createManyAndReturn
   */
  export type SprintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * The data used to create many Sprints.
     */
    data: SprintCreateManyInput | SprintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sprint update
   */
  export type SprintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The data needed to update a Sprint.
     */
    data: XOR<SprintUpdateInput, SprintUncheckedUpdateInput>
    /**
     * Choose, which Sprint to update.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint updateMany
   */
  export type SprintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sprints.
     */
    data: XOR<SprintUpdateManyMutationInput, SprintUncheckedUpdateManyInput>
    /**
     * Filter which Sprints to update
     */
    where?: SprintWhereInput
    /**
     * Limit how many Sprints to update.
     */
    limit?: number
  }

  /**
   * Sprint updateManyAndReturn
   */
  export type SprintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * The data used to update Sprints.
     */
    data: XOR<SprintUpdateManyMutationInput, SprintUncheckedUpdateManyInput>
    /**
     * Filter which Sprints to update
     */
    where?: SprintWhereInput
    /**
     * Limit how many Sprints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sprint upsert
   */
  export type SprintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The filter to search for the Sprint to update in case it exists.
     */
    where: SprintWhereUniqueInput
    /**
     * In case the Sprint found by the `where` argument doesn't exist, create a new Sprint with this data.
     */
    create: XOR<SprintCreateInput, SprintUncheckedCreateInput>
    /**
     * In case the Sprint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SprintUpdateInput, SprintUncheckedUpdateInput>
  }

  /**
   * Sprint delete
   */
  export type SprintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter which Sprint to delete.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint deleteMany
   */
  export type SprintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprints to delete
     */
    where?: SprintWhereInput
    /**
     * Limit how many Sprints to delete.
     */
    limit?: number
  }

  /**
   * Sprint.tasks
   */
  export type Sprint$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Sprint without action
   */
  export type SprintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    createdAt: Date | null
    updatedAt: Date | null
    sprintId: string | null
    creatorId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    createdAt: Date | null
    updatedAt: Date | null
    sprintId: string | null
    creatorId: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    createdAt: number
    updatedAt: number
    sprintId: number
    creatorId: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    sprintId?: true
    creatorId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    sprintId?: true
    creatorId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    sprintId?: true
    creatorId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: $Enums.TaskStatus
    priority: $Enums.Priority
    createdAt: Date
    updatedAt: Date
    sprintId: string
    creatorId: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sprintId?: boolean
    creatorId?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignees?: boolean | Task$assigneesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sprintId?: boolean
    creatorId?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sprintId?: boolean
    creatorId?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sprintId?: boolean
    creatorId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "createdAt" | "updatedAt" | "sprintId" | "creatorId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignees?: boolean | Task$assigneesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      sprint: Prisma.$SprintPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      assignees: Prisma.$TaskAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: $Enums.TaskStatus
      priority: $Enums.Priority
      createdAt: Date
      updatedAt: Date
      sprintId: string
      creatorId: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sprint<T extends SprintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SprintDefaultArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignees<T extends Task$assigneesArgs<ExtArgs> = {}>(args?: Subset<T, Task$assigneesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly sprintId: FieldRef<"Task", 'String'>
    readonly creatorId: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.assignees
   */
  export type Task$assigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    cursor?: TaskAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskAssignment
   */

  export type AggregateTaskAssignment = {
    _count: TaskAssignmentCountAggregateOutputType | null
    _min: TaskAssignmentMinAggregateOutputType | null
    _max: TaskAssignmentMaxAggregateOutputType | null
  }

  export type TaskAssignmentMinAggregateOutputType = {
    taskId: string | null
    userId: string | null
    assignedAt: Date | null
  }

  export type TaskAssignmentMaxAggregateOutputType = {
    taskId: string | null
    userId: string | null
    assignedAt: Date | null
  }

  export type TaskAssignmentCountAggregateOutputType = {
    taskId: number
    userId: number
    assignedAt: number
    _all: number
  }


  export type TaskAssignmentMinAggregateInputType = {
    taskId?: true
    userId?: true
    assignedAt?: true
  }

  export type TaskAssignmentMaxAggregateInputType = {
    taskId?: true
    userId?: true
    assignedAt?: true
  }

  export type TaskAssignmentCountAggregateInputType = {
    taskId?: true
    userId?: true
    assignedAt?: true
    _all?: true
  }

  export type TaskAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskAssignment to aggregate.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskAssignments
    **/
    _count?: true | TaskAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskAssignmentMaxAggregateInputType
  }

  export type GetTaskAssignmentAggregateType<T extends TaskAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskAssignment[P]>
      : GetScalarType<T[P], AggregateTaskAssignment[P]>
  }




  export type TaskAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithAggregationInput | TaskAssignmentOrderByWithAggregationInput[]
    by: TaskAssignmentScalarFieldEnum[] | TaskAssignmentScalarFieldEnum
    having?: TaskAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskAssignmentCountAggregateInputType | true
    _min?: TaskAssignmentMinAggregateInputType
    _max?: TaskAssignmentMaxAggregateInputType
  }

  export type TaskAssignmentGroupByOutputType = {
    taskId: string
    userId: string
    assignedAt: Date
    _count: TaskAssignmentCountAggregateOutputType | null
    _min: TaskAssignmentMinAggregateOutputType | null
    _max: TaskAssignmentMaxAggregateOutputType | null
  }

  type GetTaskAssignmentGroupByPayload<T extends TaskAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], TaskAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type TaskAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    userId?: boolean
    assignedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAssignment"]>

  export type TaskAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    userId?: boolean
    assignedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAssignment"]>

  export type TaskAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    userId?: boolean
    assignedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAssignment"]>

  export type TaskAssignmentSelectScalar = {
    taskId?: boolean
    userId?: boolean
    assignedAt?: boolean
  }

  export type TaskAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"taskId" | "userId" | "assignedAt", ExtArgs["result"]["taskAssignment"]>
  export type TaskAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskAssignment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      taskId: string
      userId: string
      assignedAt: Date
    }, ExtArgs["result"]["taskAssignment"]>
    composites: {}
  }

  type TaskAssignmentGetPayload<S extends boolean | null | undefined | TaskAssignmentDefaultArgs> = $Result.GetResult<Prisma.$TaskAssignmentPayload, S>

  type TaskAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskAssignmentCountAggregateInputType | true
    }

  export interface TaskAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskAssignment'], meta: { name: 'TaskAssignment' } }
    /**
     * Find zero or one TaskAssignment that matches the filter.
     * @param {TaskAssignmentFindUniqueArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskAssignmentFindUniqueArgs>(args: SelectSubset<T, TaskAssignmentFindUniqueArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskAssignmentFindUniqueOrThrowArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindFirstArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskAssignmentFindFirstArgs>(args?: SelectSubset<T, TaskAssignmentFindFirstArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindFirstOrThrowArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskAssignments
     * const taskAssignments = await prisma.taskAssignment.findMany()
     * 
     * // Get first 10 TaskAssignments
     * const taskAssignments = await prisma.taskAssignment.findMany({ take: 10 })
     * 
     * // Only select the `taskId`
     * const taskAssignmentWithTaskIdOnly = await prisma.taskAssignment.findMany({ select: { taskId: true } })
     * 
     */
    findMany<T extends TaskAssignmentFindManyArgs>(args?: SelectSubset<T, TaskAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskAssignment.
     * @param {TaskAssignmentCreateArgs} args - Arguments to create a TaskAssignment.
     * @example
     * // Create one TaskAssignment
     * const TaskAssignment = await prisma.taskAssignment.create({
     *   data: {
     *     // ... data to create a TaskAssignment
     *   }
     * })
     * 
     */
    create<T extends TaskAssignmentCreateArgs>(args: SelectSubset<T, TaskAssignmentCreateArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskAssignments.
     * @param {TaskAssignmentCreateManyArgs} args - Arguments to create many TaskAssignments.
     * @example
     * // Create many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskAssignmentCreateManyArgs>(args?: SelectSubset<T, TaskAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskAssignments and returns the data saved in the database.
     * @param {TaskAssignmentCreateManyAndReturnArgs} args - Arguments to create many TaskAssignments.
     * @example
     * // Create many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskAssignments and only return the `taskId`
     * const taskAssignmentWithTaskIdOnly = await prisma.taskAssignment.createManyAndReturn({
     *   select: { taskId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskAssignment.
     * @param {TaskAssignmentDeleteArgs} args - Arguments to delete one TaskAssignment.
     * @example
     * // Delete one TaskAssignment
     * const TaskAssignment = await prisma.taskAssignment.delete({
     *   where: {
     *     // ... filter to delete one TaskAssignment
     *   }
     * })
     * 
     */
    delete<T extends TaskAssignmentDeleteArgs>(args: SelectSubset<T, TaskAssignmentDeleteArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskAssignment.
     * @param {TaskAssignmentUpdateArgs} args - Arguments to update one TaskAssignment.
     * @example
     * // Update one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskAssignmentUpdateArgs>(args: SelectSubset<T, TaskAssignmentUpdateArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskAssignments.
     * @param {TaskAssignmentDeleteManyArgs} args - Arguments to filter TaskAssignments to delete.
     * @example
     * // Delete a few TaskAssignments
     * const { count } = await prisma.taskAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskAssignmentDeleteManyArgs>(args?: SelectSubset<T, TaskAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskAssignmentUpdateManyArgs>(args: SelectSubset<T, TaskAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskAssignments and returns the data updated in the database.
     * @param {TaskAssignmentUpdateManyAndReturnArgs} args - Arguments to update many TaskAssignments.
     * @example
     * // Update many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskAssignments and only return the `taskId`
     * const taskAssignmentWithTaskIdOnly = await prisma.taskAssignment.updateManyAndReturn({
     *   select: { taskId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskAssignment.
     * @param {TaskAssignmentUpsertArgs} args - Arguments to update or create a TaskAssignment.
     * @example
     * // Update or create a TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.upsert({
     *   create: {
     *     // ... data to create a TaskAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskAssignment we want to update
     *   }
     * })
     */
    upsert<T extends TaskAssignmentUpsertArgs>(args: SelectSubset<T, TaskAssignmentUpsertArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentCountArgs} args - Arguments to filter TaskAssignments to count.
     * @example
     * // Count the number of TaskAssignments
     * const count = await prisma.taskAssignment.count({
     *   where: {
     *     // ... the filter for the TaskAssignments we want to count
     *   }
     * })
    **/
    count<T extends TaskAssignmentCountArgs>(
      args?: Subset<T, TaskAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAssignmentAggregateArgs>(args: Subset<T, TaskAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTaskAssignmentAggregateType<T>>

    /**
     * Group by TaskAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: TaskAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskAssignment model
   */
  readonly fields: TaskAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskAssignment model
   */
  interface TaskAssignmentFieldRefs {
    readonly taskId: FieldRef<"TaskAssignment", 'String'>
    readonly userId: FieldRef<"TaskAssignment", 'String'>
    readonly assignedAt: FieldRef<"TaskAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskAssignment findUnique
   */
  export type TaskAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment findUniqueOrThrow
   */
  export type TaskAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment findFirst
   */
  export type TaskAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskAssignments.
     */
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment findFirstOrThrow
   */
  export type TaskAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskAssignments.
     */
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment findMany
   */
  export type TaskAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignments to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment create
   */
  export type TaskAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskAssignment.
     */
    data: XOR<TaskAssignmentCreateInput, TaskAssignmentUncheckedCreateInput>
  }

  /**
   * TaskAssignment createMany
   */
  export type TaskAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskAssignments.
     */
    data: TaskAssignmentCreateManyInput | TaskAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskAssignment createManyAndReturn
   */
  export type TaskAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many TaskAssignments.
     */
    data: TaskAssignmentCreateManyInput | TaskAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskAssignment update
   */
  export type TaskAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskAssignment.
     */
    data: XOR<TaskAssignmentUpdateInput, TaskAssignmentUncheckedUpdateInput>
    /**
     * Choose, which TaskAssignment to update.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment updateMany
   */
  export type TaskAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskAssignments.
     */
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TaskAssignments to update
     */
    where?: TaskAssignmentWhereInput
    /**
     * Limit how many TaskAssignments to update.
     */
    limit?: number
  }

  /**
   * TaskAssignment updateManyAndReturn
   */
  export type TaskAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update TaskAssignments.
     */
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TaskAssignments to update
     */
    where?: TaskAssignmentWhereInput
    /**
     * Limit how many TaskAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskAssignment upsert
   */
  export type TaskAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskAssignment to update in case it exists.
     */
    where: TaskAssignmentWhereUniqueInput
    /**
     * In case the TaskAssignment found by the `where` argument doesn't exist, create a new TaskAssignment with this data.
     */
    create: XOR<TaskAssignmentCreateInput, TaskAssignmentUncheckedCreateInput>
    /**
     * In case the TaskAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskAssignmentUpdateInput, TaskAssignmentUncheckedUpdateInput>
  }

  /**
   * TaskAssignment delete
   */
  export type TaskAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter which TaskAssignment to delete.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment deleteMany
   */
  export type TaskAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskAssignments to delete
     */
    where?: TaskAssignmentWhereInput
    /**
     * Limit how many TaskAssignments to delete.
     */
    limit?: number
  }

  /**
   * TaskAssignment without action
   */
  export type TaskAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    birthdate: 'birthdate',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parentId: 'parentId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SprintScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type SprintScalarFieldEnum = (typeof SprintScalarFieldEnum)[keyof typeof SprintScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sprintId: 'sprintId',
    creatorId: 'creatorId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskAssignmentScalarFieldEnum: {
    taskId: 'taskId',
    userId: 'userId',
    assignedAt: 'assignedAt'
  };

  export type TaskAssignmentScalarFieldEnum = (typeof TaskAssignmentScalarFieldEnum)[keyof typeof TaskAssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parentId?: StringNullableFilter<"User"> | string | null
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    createdSprints?: SprintListRelationFilter
    createdTasks?: TaskListRelationFilter
    assignments?: TaskAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthdate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: UserOrderByWithRelationInput
    children?: UserOrderByRelationAggregateInput
    createdSprints?: SprintOrderByRelationAggregateInput
    createdTasks?: TaskOrderByRelationAggregateInput
    assignments?: TaskAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parentId?: StringNullableFilter<"User"> | string | null
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    createdSprints?: SprintListRelationFilter
    createdTasks?: TaskListRelationFilter
    assignments?: TaskAssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthdate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    birthdate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    parentId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SprintWhereInput = {
    AND?: SprintWhereInput | SprintWhereInput[]
    OR?: SprintWhereInput[]
    NOT?: SprintWhereInput | SprintWhereInput[]
    id?: StringFilter<"Sprint"> | string
    name?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeFilter<"Sprint"> | Date | string
    createdById?: StringFilter<"Sprint"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type SprintOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type SprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SprintWhereInput | SprintWhereInput[]
    OR?: SprintWhereInput[]
    NOT?: SprintWhereInput | SprintWhereInput[]
    name?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeFilter<"Sprint"> | Date | string
    createdById?: StringFilter<"Sprint"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type SprintOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: SprintCountOrderByAggregateInput
    _max?: SprintMaxOrderByAggregateInput
    _min?: SprintMinOrderByAggregateInput
  }

  export type SprintScalarWhereWithAggregatesInput = {
    AND?: SprintScalarWhereWithAggregatesInput | SprintScalarWhereWithAggregatesInput[]
    OR?: SprintScalarWhereWithAggregatesInput[]
    NOT?: SprintScalarWhereWithAggregatesInput | SprintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sprint"> | string
    name?: StringWithAggregatesFilter<"Sprint"> | string
    startDate?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    createdById?: StringWithAggregatesFilter<"Sprint"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    sprintId?: StringFilter<"Task"> | string
    creatorId?: StringFilter<"Task"> | string
    sprint?: XOR<SprintScalarRelationFilter, SprintWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignees?: TaskAssignmentListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sprintId?: SortOrder
    creatorId?: SortOrder
    sprint?: SprintOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    assignees?: TaskAssignmentOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    sprintId?: StringFilter<"Task"> | string
    creatorId?: StringFilter<"Task"> | string
    sprint?: XOR<SprintScalarRelationFilter, SprintWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignees?: TaskAssignmentListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sprintId?: SortOrder
    creatorId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    sprintId?: StringWithAggregatesFilter<"Task"> | string
    creatorId?: StringWithAggregatesFilter<"Task"> | string
  }

  export type TaskAssignmentWhereInput = {
    AND?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    OR?: TaskAssignmentWhereInput[]
    NOT?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    taskId?: StringFilter<"TaskAssignment"> | string
    userId?: StringFilter<"TaskAssignment"> | string
    assignedAt?: DateTimeFilter<"TaskAssignment"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskAssignmentOrderByWithRelationInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TaskAssignmentWhereUniqueInput = Prisma.AtLeast<{
    taskId_userId?: TaskAssignmentTaskIdUserIdCompoundUniqueInput
    AND?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    OR?: TaskAssignmentWhereInput[]
    NOT?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    taskId?: StringFilter<"TaskAssignment"> | string
    userId?: StringFilter<"TaskAssignment"> | string
    assignedAt?: DateTimeFilter<"TaskAssignment"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "taskId_userId">

  export type TaskAssignmentOrderByWithAggregationInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    _count?: TaskAssignmentCountOrderByAggregateInput
    _max?: TaskAssignmentMaxOrderByAggregateInput
    _min?: TaskAssignmentMinOrderByAggregateInput
  }

  export type TaskAssignmentScalarWhereWithAggregatesInput = {
    AND?: TaskAssignmentScalarWhereWithAggregatesInput | TaskAssignmentScalarWhereWithAggregatesInput[]
    OR?: TaskAssignmentScalarWhereWithAggregatesInput[]
    NOT?: TaskAssignmentScalarWhereWithAggregatesInput | TaskAssignmentScalarWhereWithAggregatesInput[]
    taskId?: StringWithAggregatesFilter<"TaskAssignment"> | string
    userId?: StringWithAggregatesFilter<"TaskAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"TaskAssignment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    createdSprints?: SprintCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignments?: TaskAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    createdSprints?: SprintUncheckedCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    createdSprints?: SprintUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    createdSprints?: SprintUncheckedUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SprintCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSprintsInput
    tasks?: TaskCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    tasks?: TaskUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSprintsNestedInput
    tasks?: TaskUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type SprintCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type SprintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutTasksInput
    creator: UserCreateNestedOneWithoutCreatedTasksInput
    assignees?: TaskAssignmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    sprintId: string
    creatorId: string
    assignees?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutTasksNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignees?: TaskAssignmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprintId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    assignees?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    sprintId: string
    creatorId: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprintId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskAssignmentCreateInput = {
    assignedAt?: Date | string
    task: TaskCreateNestedOneWithoutAssigneesInput
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type TaskAssignmentUncheckedCreateInput = {
    taskId: string
    userId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutAssigneesNestedInput
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type TaskAssignmentUncheckedUpdateInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentCreateManyInput = {
    taskId: string
    userId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentUncheckedUpdateManyInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SprintListRelationFilter = {
    every?: SprintWhereInput
    some?: SprintWhereInput
    none?: SprintWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskAssignmentListRelationFilter = {
    every?: TaskAssignmentWhereInput
    some?: TaskAssignmentWhereInput
    none?: TaskAssignmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SprintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthdate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthdate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthdate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SprintCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type SprintMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type SprintMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type SprintScalarRelationFilter = {
    is?: SprintWhereInput
    isNot?: SprintWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sprintId?: SortOrder
    creatorId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sprintId?: SortOrder
    creatorId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sprintId?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskAssignmentTaskIdUserIdCompoundUniqueInput = {
    taskId: string
    userId: string
  }

  export type TaskAssignmentCountOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TaskAssignmentMaxOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TaskAssignmentMinOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutChildrenInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SprintCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SprintCreateWithoutCreatedByInput, SprintUncheckedCreateWithoutCreatedByInput> | SprintCreateWithoutCreatedByInput[] | SprintUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutCreatedByInput | SprintCreateOrConnectWithoutCreatedByInput[]
    createMany?: SprintCreateManyCreatedByInputEnvelope
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SprintUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SprintCreateWithoutCreatedByInput, SprintUncheckedCreateWithoutCreatedByInput> | SprintCreateWithoutCreatedByInput[] | SprintUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutCreatedByInput | SprintCreateOrConnectWithoutCreatedByInput[]
    createMany?: SprintCreateManyCreatedByInputEnvelope
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    upsert?: UserUpsertWithoutChildrenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChildrenInput, UserUpdateWithoutChildrenInput>, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SprintUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SprintCreateWithoutCreatedByInput, SprintUncheckedCreateWithoutCreatedByInput> | SprintCreateWithoutCreatedByInput[] | SprintUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutCreatedByInput | SprintCreateOrConnectWithoutCreatedByInput[]
    upsert?: SprintUpsertWithWhereUniqueWithoutCreatedByInput | SprintUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SprintCreateManyCreatedByInputEnvelope
    set?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    disconnect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    delete?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    update?: SprintUpdateWithWhereUniqueWithoutCreatedByInput | SprintUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SprintUpdateManyWithWhereWithoutCreatedByInput | SprintUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SprintScalarWhereInput | SprintScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatorInput | TaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatorInput | TaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatorInput | TaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutUserInput | TaskAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutUserInput | TaskAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutUserInput | TaskAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SprintUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SprintCreateWithoutCreatedByInput, SprintUncheckedCreateWithoutCreatedByInput> | SprintCreateWithoutCreatedByInput[] | SprintUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutCreatedByInput | SprintCreateOrConnectWithoutCreatedByInput[]
    upsert?: SprintUpsertWithWhereUniqueWithoutCreatedByInput | SprintUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SprintCreateManyCreatedByInputEnvelope
    set?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    disconnect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    delete?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    update?: SprintUpdateWithWhereUniqueWithoutCreatedByInput | SprintUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SprintUpdateManyWithWhereWithoutCreatedByInput | SprintUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SprintScalarWhereInput | SprintScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatorInput | TaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatorInput | TaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatorInput | TaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutUserInput | TaskAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutUserInput | TaskAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutUserInput | TaskAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedSprintsInput = {
    create?: XOR<UserCreateWithoutCreatedSprintsInput, UserUncheckedCreateWithoutCreatedSprintsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSprintsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutSprintInput = {
    create?: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput> | TaskCreateWithoutSprintInput[] | TaskUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSprintInput | TaskCreateOrConnectWithoutSprintInput[]
    createMany?: TaskCreateManySprintInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutSprintInput = {
    create?: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput> | TaskCreateWithoutSprintInput[] | TaskUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSprintInput | TaskCreateOrConnectWithoutSprintInput[]
    createMany?: TaskCreateManySprintInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedSprintsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSprintsInput, UserUncheckedCreateWithoutCreatedSprintsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSprintsInput
    upsert?: UserUpsertWithoutCreatedSprintsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSprintsInput, UserUpdateWithoutCreatedSprintsInput>, UserUncheckedUpdateWithoutCreatedSprintsInput>
  }

  export type TaskUpdateManyWithoutSprintNestedInput = {
    create?: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput> | TaskCreateWithoutSprintInput[] | TaskUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSprintInput | TaskCreateOrConnectWithoutSprintInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSprintInput | TaskUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: TaskCreateManySprintInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSprintInput | TaskUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSprintInput | TaskUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutSprintNestedInput = {
    create?: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput> | TaskCreateWithoutSprintInput[] | TaskUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSprintInput | TaskCreateOrConnectWithoutSprintInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSprintInput | TaskUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: TaskCreateManySprintInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSprintInput | TaskUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSprintInput | TaskUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SprintCreateNestedOneWithoutTasksInput = {
    create?: XOR<SprintCreateWithoutTasksInput, SprintUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SprintCreateOrConnectWithoutTasksInput
    connect?: SprintWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskAssignmentCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type SprintUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<SprintCreateWithoutTasksInput, SprintUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SprintCreateOrConnectWithoutTasksInput
    upsert?: SprintUpsertWithoutTasksInput
    connect?: SprintWhereUniqueInput
    update?: XOR<XOR<SprintUpdateToOneWithWhereWithoutTasksInput, SprintUpdateWithoutTasksInput>, SprintUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type TaskAssignmentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput | TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput | TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutTaskInput | TaskAssignmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput | TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput | TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutTaskInput | TaskAssignmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutAssigneesInput = {
    create?: XOR<TaskCreateWithoutAssigneesInput, TaskUncheckedCreateWithoutAssigneesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneesInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutAssigneesNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneesInput, TaskUncheckedCreateWithoutAssigneesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneesInput
    upsert?: TaskUpsertWithoutAssigneesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutAssigneesInput, TaskUpdateWithoutAssigneesInput>, TaskUncheckedUpdateWithoutAssigneesInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type UserCreateWithoutChildrenInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    createdSprints?: SprintCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignments?: TaskAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    createdSprints?: SprintUncheckedCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChildrenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserCreateNestedManyWithoutParentInput
    createdSprints?: SprintCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignments?: TaskAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    createdSprints?: SprintUncheckedCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserCreateManyParentInputEnvelope = {
    data: UserCreateManyParentInput | UserCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type SprintCreateWithoutCreatedByInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintCreateOrConnectWithoutCreatedByInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutCreatedByInput, SprintUncheckedCreateWithoutCreatedByInput>
  }

  export type SprintCreateManyCreatedByInputEnvelope = {
    data: SprintCreateManyCreatedByInput | SprintCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutTasksInput
    assignees?: TaskAssignmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    sprintId: string
    assignees?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput>
  }

  export type TaskCreateManyCreatorInputEnvelope = {
    data: TaskCreateManyCreatorInput | TaskCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type TaskAssignmentCreateWithoutUserInput = {
    assignedAt?: Date | string
    task: TaskCreateNestedOneWithoutAssigneesInput
  }

  export type TaskAssignmentUncheckedCreateWithoutUserInput = {
    taskId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentCreateOrConnectWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    create: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput>
  }

  export type TaskAssignmentCreateManyUserInputEnvelope = {
    data: TaskAssignmentCreateManyUserInput | TaskAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChildrenInput = {
    update: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChildrenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    createdSprints?: SprintUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdSprints?: SprintUncheckedUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateManyWithWhereWithoutParentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutParentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parentId?: StringNullableFilter<"User"> | string | null
  }

  export type SprintUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SprintWhereUniqueInput
    update: XOR<SprintUpdateWithoutCreatedByInput, SprintUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SprintCreateWithoutCreatedByInput, SprintUncheckedCreateWithoutCreatedByInput>
  }

  export type SprintUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SprintWhereUniqueInput
    data: XOR<SprintUpdateWithoutCreatedByInput, SprintUncheckedUpdateWithoutCreatedByInput>
  }

  export type SprintUpdateManyWithWhereWithoutCreatedByInput = {
    where: SprintScalarWhereInput
    data: XOR<SprintUpdateManyMutationInput, SprintUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SprintScalarWhereInput = {
    AND?: SprintScalarWhereInput | SprintScalarWhereInput[]
    OR?: SprintScalarWhereInput[]
    NOT?: SprintScalarWhereInput | SprintScalarWhereInput[]
    id?: StringFilter<"Sprint"> | string
    name?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeFilter<"Sprint"> | Date | string
    createdById?: StringFilter<"Sprint"> | string
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatorInput, TaskUncheckedUpdateWithoutCreatorInput>
    create: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatorInput, TaskUncheckedUpdateWithoutCreatorInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatorInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    sprintId?: StringFilter<"Task"> | string
    creatorId?: StringFilter<"Task"> | string
  }

  export type TaskAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    update: XOR<TaskAssignmentUpdateWithoutUserInput, TaskAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput>
  }

  export type TaskAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    data: XOR<TaskAssignmentUpdateWithoutUserInput, TaskAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type TaskAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: TaskAssignmentScalarWhereInput
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskAssignmentScalarWhereInput = {
    AND?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
    OR?: TaskAssignmentScalarWhereInput[]
    NOT?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
    taskId?: StringFilter<"TaskAssignment"> | string
    userId?: StringFilter<"TaskAssignment"> | string
    assignedAt?: DateTimeFilter<"TaskAssignment"> | Date | string
  }

  export type UserCreateWithoutCreatedSprintsInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignments?: TaskAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedSprintsInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedSprintsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSprintsInput, UserUncheckedCreateWithoutCreatedSprintsInput>
  }

  export type TaskCreateWithoutSprintInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedTasksInput
    assignees?: TaskAssignmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSprintInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    assignees?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSprintInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput>
  }

  export type TaskCreateManySprintInputEnvelope = {
    data: TaskCreateManySprintInput | TaskCreateManySprintInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedSprintsInput = {
    update: XOR<UserUpdateWithoutCreatedSprintsInput, UserUncheckedUpdateWithoutCreatedSprintsInput>
    create: XOR<UserCreateWithoutCreatedSprintsInput, UserUncheckedCreateWithoutCreatedSprintsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSprintsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSprintsInput, UserUncheckedUpdateWithoutCreatedSprintsInput>
  }

  export type UserUpdateWithoutCreatedSprintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSprintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutSprintInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutSprintInput, TaskUncheckedUpdateWithoutSprintInput>
    create: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutSprintInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutSprintInput, TaskUncheckedUpdateWithoutSprintInput>
  }

  export type TaskUpdateManyWithWhereWithoutSprintInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSprintInput>
  }

  export type SprintCreateWithoutTasksInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSprintsInput
  }

  export type SprintUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type SprintCreateOrConnectWithoutTasksInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutTasksInput, SprintUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    createdSprints?: SprintCreateNestedManyWithoutCreatedByInput
    assignments?: TaskAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    createdSprints?: SprintUncheckedCreateNestedManyWithoutCreatedByInput
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type TaskAssignmentCreateWithoutTaskInput = {
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type TaskAssignmentUncheckedCreateWithoutTaskInput = {
    userId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentCreateOrConnectWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    create: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput>
  }

  export type TaskAssignmentCreateManyTaskInputEnvelope = {
    data: TaskAssignmentCreateManyTaskInput | TaskAssignmentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type SprintUpsertWithoutTasksInput = {
    update: XOR<SprintUpdateWithoutTasksInput, SprintUncheckedUpdateWithoutTasksInput>
    create: XOR<SprintCreateWithoutTasksInput, SprintUncheckedCreateWithoutTasksInput>
    where?: SprintWhereInput
  }

  export type SprintUpdateToOneWithWhereWithoutTasksInput = {
    where?: SprintWhereInput
    data: XOR<SprintUpdateWithoutTasksInput, SprintUncheckedUpdateWithoutTasksInput>
  }

  export type SprintUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSprintsNestedInput
  }

  export type SprintUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    createdSprints?: SprintUpdateManyWithoutCreatedByNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    createdSprints?: SprintUncheckedUpdateManyWithoutCreatedByNestedInput
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    update: XOR<TaskAssignmentUpdateWithoutTaskInput, TaskAssignmentUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput>
  }

  export type TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    data: XOR<TaskAssignmentUpdateWithoutTaskInput, TaskAssignmentUncheckedUpdateWithoutTaskInput>
  }

  export type TaskAssignmentUpdateManyWithWhereWithoutTaskInput = {
    where: TaskAssignmentScalarWhereInput
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutAssigneesInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutTasksInput
    creator: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type TaskUncheckedCreateWithoutAssigneesInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    sprintId: string
    creatorId: string
  }

  export type TaskCreateOrConnectWithoutAssigneesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneesInput, TaskUncheckedCreateWithoutAssigneesInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    createdSprints?: SprintCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    createdSprints?: SprintUncheckedCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type TaskUpsertWithoutAssigneesInput = {
    update: XOR<TaskUpdateWithoutAssigneesInput, TaskUncheckedUpdateWithoutAssigneesInput>
    create: XOR<TaskCreateWithoutAssigneesInput, TaskUncheckedCreateWithoutAssigneesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutAssigneesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutAssigneesInput, TaskUncheckedUpdateWithoutAssigneesInput>
  }

  export type TaskUpdateWithoutAssigneesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutTasksNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssigneesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprintId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    createdSprints?: SprintUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    createdSprints?: SprintUncheckedUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyParentInput = {
    id?: string
    name: string
    email: string
    password: string
    birthdate: Date | string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SprintCreateManyCreatedByInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    sprintId: string
  }

  export type TaskAssignmentCreateManyUserInput = {
    taskId: string
    assignedAt?: Date | string
  }

  export type UserUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUpdateManyWithoutParentNestedInput
    createdSprints?: SprintUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    createdSprints?: SprintUncheckedUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutTasksNestedInput
    assignees?: TaskAssignmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprintId?: StringFieldUpdateOperationsInput | string
    assignees?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprintId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskAssignmentUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutAssigneesNestedInput
  }

  export type TaskAssignmentUncheckedUpdateWithoutUserInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutUserInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManySprintInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
  }

  export type TaskUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignees?: TaskAssignmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    assignees?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskAssignmentCreateManyTaskInput = {
    userId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentUpdateWithoutTaskInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type TaskAssignmentUncheckedUpdateWithoutTaskInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutTaskInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}