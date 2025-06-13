
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
 * Model Recrutador
 * 
 */
export type Recrutador = $Result.DefaultSelection<Prisma.$RecrutadorPayload>
/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Contratacao
 * 
 */
export type Contratacao = $Result.DefaultSelection<Prisma.$ContratacaoPayload>
/**
 * Model Nota
 * 
 */
export type Nota = $Result.DefaultSelection<Prisma.$NotaPayload>
/**
 * Model Aptidao
 * 
 */
export type Aptidao = $Result.DefaultSelection<Prisma.$AptidaoPayload>
/**
 * Model SoftSkill
 * 
 */
export type SoftSkill = $Result.DefaultSelection<Prisma.$SoftSkillPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recrutadors
 * const recrutadors = await prisma.recrutador.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Recrutadors
   * const recrutadors = await prisma.recrutador.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.recrutador`: Exposes CRUD operations for the **Recrutador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recrutadors
    * const recrutadors = await prisma.recrutador.findMany()
    * ```
    */
  get recrutador(): Prisma.RecrutadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contratacao`: Exposes CRUD operations for the **Contratacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contratacaos
    * const contratacaos = await prisma.contratacao.findMany()
    * ```
    */
  get contratacao(): Prisma.ContratacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nota`: Exposes CRUD operations for the **Nota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notas
    * const notas = await prisma.nota.findMany()
    * ```
    */
  get nota(): Prisma.NotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aptidao`: Exposes CRUD operations for the **Aptidao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aptidaos
    * const aptidaos = await prisma.aptidao.findMany()
    * ```
    */
  get aptidao(): Prisma.AptidaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.softSkill`: Exposes CRUD operations for the **SoftSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SoftSkills
    * const softSkills = await prisma.softSkill.findMany()
    * ```
    */
  get softSkill(): Prisma.SoftSkillDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Recrutador: 'Recrutador',
    Empresa: 'Empresa',
    Aluno: 'Aluno',
    Contratacao: 'Contratacao',
    Nota: 'Nota',
    Aptidao: 'Aptidao',
    SoftSkill: 'SoftSkill'
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
      modelProps: "recrutador" | "empresa" | "aluno" | "contratacao" | "nota" | "aptidao" | "softSkill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recrutador: {
        payload: Prisma.$RecrutadorPayload<ExtArgs>
        fields: Prisma.RecrutadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecrutadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecrutadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>
          }
          findFirst: {
            args: Prisma.RecrutadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecrutadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>
          }
          findMany: {
            args: Prisma.RecrutadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>[]
          }
          create: {
            args: Prisma.RecrutadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>
          }
          createMany: {
            args: Prisma.RecrutadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecrutadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>[]
          }
          delete: {
            args: Prisma.RecrutadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>
          }
          update: {
            args: Prisma.RecrutadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>
          }
          deleteMany: {
            args: Prisma.RecrutadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecrutadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecrutadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>[]
          }
          upsert: {
            args: Prisma.RecrutadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecrutadorPayload>
          }
          aggregate: {
            args: Prisma.RecrutadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecrutador>
          }
          groupBy: {
            args: Prisma.RecrutadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecrutadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecrutadorCountArgs<ExtArgs>
            result: $Utils.Optional<RecrutadorCountAggregateOutputType> | number
          }
        }
      }
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlunoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Contratacao: {
        payload: Prisma.$ContratacaoPayload<ExtArgs>
        fields: Prisma.ContratacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContratacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContratacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>
          }
          findFirst: {
            args: Prisma.ContratacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContratacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>
          }
          findMany: {
            args: Prisma.ContratacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>[]
          }
          create: {
            args: Prisma.ContratacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>
          }
          createMany: {
            args: Prisma.ContratacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContratacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>[]
          }
          delete: {
            args: Prisma.ContratacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>
          }
          update: {
            args: Prisma.ContratacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>
          }
          deleteMany: {
            args: Prisma.ContratacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContratacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContratacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>[]
          }
          upsert: {
            args: Prisma.ContratacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacaoPayload>
          }
          aggregate: {
            args: Prisma.ContratacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContratacao>
          }
          groupBy: {
            args: Prisma.ContratacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContratacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContratacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ContratacaoCountAggregateOutputType> | number
          }
        }
      }
      Nota: {
        payload: Prisma.$NotaPayload<ExtArgs>
        fields: Prisma.NotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          findFirst: {
            args: Prisma.NotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          findMany: {
            args: Prisma.NotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>[]
          }
          create: {
            args: Prisma.NotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          createMany: {
            args: Prisma.NotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>[]
          }
          delete: {
            args: Prisma.NotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          update: {
            args: Prisma.NotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          deleteMany: {
            args: Prisma.NotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>[]
          }
          upsert: {
            args: Prisma.NotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaPayload>
          }
          aggregate: {
            args: Prisma.NotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNota>
          }
          groupBy: {
            args: Prisma.NotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotaCountArgs<ExtArgs>
            result: $Utils.Optional<NotaCountAggregateOutputType> | number
          }
        }
      }
      Aptidao: {
        payload: Prisma.$AptidaoPayload<ExtArgs>
        fields: Prisma.AptidaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AptidaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AptidaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>
          }
          findFirst: {
            args: Prisma.AptidaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AptidaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>
          }
          findMany: {
            args: Prisma.AptidaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>[]
          }
          create: {
            args: Prisma.AptidaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>
          }
          createMany: {
            args: Prisma.AptidaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AptidaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>[]
          }
          delete: {
            args: Prisma.AptidaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>
          }
          update: {
            args: Prisma.AptidaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>
          }
          deleteMany: {
            args: Prisma.AptidaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AptidaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AptidaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>[]
          }
          upsert: {
            args: Prisma.AptidaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptidaoPayload>
          }
          aggregate: {
            args: Prisma.AptidaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAptidao>
          }
          groupBy: {
            args: Prisma.AptidaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AptidaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AptidaoCountArgs<ExtArgs>
            result: $Utils.Optional<AptidaoCountAggregateOutputType> | number
          }
        }
      }
      SoftSkill: {
        payload: Prisma.$SoftSkillPayload<ExtArgs>
        fields: Prisma.SoftSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoftSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoftSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>
          }
          findFirst: {
            args: Prisma.SoftSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoftSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>
          }
          findMany: {
            args: Prisma.SoftSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>[]
          }
          create: {
            args: Prisma.SoftSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>
          }
          createMany: {
            args: Prisma.SoftSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoftSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>[]
          }
          delete: {
            args: Prisma.SoftSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>
          }
          update: {
            args: Prisma.SoftSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>
          }
          deleteMany: {
            args: Prisma.SoftSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoftSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SoftSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>[]
          }
          upsert: {
            args: Prisma.SoftSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftSkillPayload>
          }
          aggregate: {
            args: Prisma.SoftSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoftSkill>
          }
          groupBy: {
            args: Prisma.SoftSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoftSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoftSkillCountArgs<ExtArgs>
            result: $Utils.Optional<SoftSkillCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    recrutador?: RecrutadorOmit
    empresa?: EmpresaOmit
    aluno?: AlunoOmit
    contratacao?: ContratacaoOmit
    nota?: NotaOmit
    aptidao?: AptidaoOmit
    softSkill?: SoftSkillOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type RecrutadorCountOutputType
   */

  export type RecrutadorCountOutputType = {
    contratacoes: number
  }

  export type RecrutadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratacoes?: boolean | RecrutadorCountOutputTypeCountContratacoesArgs
  }

  // Custom InputTypes
  /**
   * RecrutadorCountOutputType without action
   */
  export type RecrutadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecrutadorCountOutputType
     */
    select?: RecrutadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecrutadorCountOutputType without action
   */
  export type RecrutadorCountOutputTypeCountContratacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratacaoWhereInput
  }


  /**
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    recrutadores: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recrutadores?: boolean | EmpresaCountOutputTypeCountRecrutadoresArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountRecrutadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecrutadorWhereInput
  }


  /**
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    contratacoes: number
    notas: number
    aptidoes: number
    softskills: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratacoes?: boolean | AlunoCountOutputTypeCountContratacoesArgs
    notas?: boolean | AlunoCountOutputTypeCountNotasArgs
    aptidoes?: boolean | AlunoCountOutputTypeCountAptidoesArgs
    softskills?: boolean | AlunoCountOutputTypeCountSoftskillsArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountContratacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratacaoWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountAptidoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AptidaoWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountSoftskillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoftSkillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Recrutador
   */

  export type AggregateRecrutador = {
    _count: RecrutadorCountAggregateOutputType | null
    _min: RecrutadorMinAggregateOutputType | null
    _max: RecrutadorMaxAggregateOutputType | null
  }

  export type RecrutadorMinAggregateOutputType = {
    id_recrutador: string | null
    nome: string | null
    email: string | null
    senha: string | null
    cargo: string | null
    telefone: string | null
    id_empresa: string | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type RecrutadorMaxAggregateOutputType = {
    id_recrutador: string | null
    nome: string | null
    email: string | null
    senha: string | null
    cargo: string | null
    telefone: string | null
    id_empresa: string | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type RecrutadorCountAggregateOutputType = {
    id_recrutador: number
    nome: number
    email: number
    senha: number
    cargo: number
    telefone: number
    id_empresa: number
    data_criacao: number
    data_atualizacao: number
    _all: number
  }


  export type RecrutadorMinAggregateInputType = {
    id_recrutador?: true
    nome?: true
    email?: true
    senha?: true
    cargo?: true
    telefone?: true
    id_empresa?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type RecrutadorMaxAggregateInputType = {
    id_recrutador?: true
    nome?: true
    email?: true
    senha?: true
    cargo?: true
    telefone?: true
    id_empresa?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type RecrutadorCountAggregateInputType = {
    id_recrutador?: true
    nome?: true
    email?: true
    senha?: true
    cargo?: true
    telefone?: true
    id_empresa?: true
    data_criacao?: true
    data_atualizacao?: true
    _all?: true
  }

  export type RecrutadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recrutador to aggregate.
     */
    where?: RecrutadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recrutadors to fetch.
     */
    orderBy?: RecrutadorOrderByWithRelationInput | RecrutadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecrutadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recrutadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recrutadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recrutadors
    **/
    _count?: true | RecrutadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecrutadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecrutadorMaxAggregateInputType
  }

  export type GetRecrutadorAggregateType<T extends RecrutadorAggregateArgs> = {
        [P in keyof T & keyof AggregateRecrutador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecrutador[P]>
      : GetScalarType<T[P], AggregateRecrutador[P]>
  }




  export type RecrutadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecrutadorWhereInput
    orderBy?: RecrutadorOrderByWithAggregationInput | RecrutadorOrderByWithAggregationInput[]
    by: RecrutadorScalarFieldEnum[] | RecrutadorScalarFieldEnum
    having?: RecrutadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecrutadorCountAggregateInputType | true
    _min?: RecrutadorMinAggregateInputType
    _max?: RecrutadorMaxAggregateInputType
  }

  export type RecrutadorGroupByOutputType = {
    id_recrutador: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    id_empresa: string
    data_criacao: Date
    data_atualizacao: Date
    _count: RecrutadorCountAggregateOutputType | null
    _min: RecrutadorMinAggregateOutputType | null
    _max: RecrutadorMaxAggregateOutputType | null
  }

  type GetRecrutadorGroupByPayload<T extends RecrutadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecrutadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecrutadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecrutadorGroupByOutputType[P]>
            : GetScalarType<T[P], RecrutadorGroupByOutputType[P]>
        }
      >
    >


  export type RecrutadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recrutador?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cargo?: boolean
    telefone?: boolean
    id_empresa?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    contratacoes?: boolean | Recrutador$contratacoesArgs<ExtArgs>
    _count?: boolean | RecrutadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recrutador"]>

  export type RecrutadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recrutador?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cargo?: boolean
    telefone?: boolean
    id_empresa?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recrutador"]>

  export type RecrutadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recrutador?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cargo?: boolean
    telefone?: boolean
    id_empresa?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recrutador"]>

  export type RecrutadorSelectScalar = {
    id_recrutador?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cargo?: boolean
    telefone?: boolean
    id_empresa?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }

  export type RecrutadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_recrutador" | "nome" | "email" | "senha" | "cargo" | "telefone" | "id_empresa" | "data_criacao" | "data_atualizacao", ExtArgs["result"]["recrutador"]>
  export type RecrutadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    contratacoes?: boolean | Recrutador$contratacoesArgs<ExtArgs>
    _count?: boolean | RecrutadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecrutadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type RecrutadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $RecrutadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recrutador"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      contratacoes: Prisma.$ContratacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_recrutador: string
      nome: string
      email: string
      senha: string
      cargo: string
      telefone: string
      id_empresa: string
      data_criacao: Date
      data_atualizacao: Date
    }, ExtArgs["result"]["recrutador"]>
    composites: {}
  }

  type RecrutadorGetPayload<S extends boolean | null | undefined | RecrutadorDefaultArgs> = $Result.GetResult<Prisma.$RecrutadorPayload, S>

  type RecrutadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecrutadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecrutadorCountAggregateInputType | true
    }

  export interface RecrutadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recrutador'], meta: { name: 'Recrutador' } }
    /**
     * Find zero or one Recrutador that matches the filter.
     * @param {RecrutadorFindUniqueArgs} args - Arguments to find a Recrutador
     * @example
     * // Get one Recrutador
     * const recrutador = await prisma.recrutador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecrutadorFindUniqueArgs>(args: SelectSubset<T, RecrutadorFindUniqueArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recrutador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecrutadorFindUniqueOrThrowArgs} args - Arguments to find a Recrutador
     * @example
     * // Get one Recrutador
     * const recrutador = await prisma.recrutador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecrutadorFindUniqueOrThrowArgs>(args: SelectSubset<T, RecrutadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recrutador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecrutadorFindFirstArgs} args - Arguments to find a Recrutador
     * @example
     * // Get one Recrutador
     * const recrutador = await prisma.recrutador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecrutadorFindFirstArgs>(args?: SelectSubset<T, RecrutadorFindFirstArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recrutador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecrutadorFindFirstOrThrowArgs} args - Arguments to find a Recrutador
     * @example
     * // Get one Recrutador
     * const recrutador = await prisma.recrutador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecrutadorFindFirstOrThrowArgs>(args?: SelectSubset<T, RecrutadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recrutadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecrutadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recrutadors
     * const recrutadors = await prisma.recrutador.findMany()
     * 
     * // Get first 10 Recrutadors
     * const recrutadors = await prisma.recrutador.findMany({ take: 10 })
     * 
     * // Only select the `id_recrutador`
     * const recrutadorWithId_recrutadorOnly = await prisma.recrutador.findMany({ select: { id_recrutador: true } })
     * 
     */
    findMany<T extends RecrutadorFindManyArgs>(args?: SelectSubset<T, RecrutadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recrutador.
     * @param {RecrutadorCreateArgs} args - Arguments to create a Recrutador.
     * @example
     * // Create one Recrutador
     * const Recrutador = await prisma.recrutador.create({
     *   data: {
     *     // ... data to create a Recrutador
     *   }
     * })
     * 
     */
    create<T extends RecrutadorCreateArgs>(args: SelectSubset<T, RecrutadorCreateArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recrutadors.
     * @param {RecrutadorCreateManyArgs} args - Arguments to create many Recrutadors.
     * @example
     * // Create many Recrutadors
     * const recrutador = await prisma.recrutador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecrutadorCreateManyArgs>(args?: SelectSubset<T, RecrutadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recrutadors and returns the data saved in the database.
     * @param {RecrutadorCreateManyAndReturnArgs} args - Arguments to create many Recrutadors.
     * @example
     * // Create many Recrutadors
     * const recrutador = await prisma.recrutador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recrutadors and only return the `id_recrutador`
     * const recrutadorWithId_recrutadorOnly = await prisma.recrutador.createManyAndReturn({
     *   select: { id_recrutador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecrutadorCreateManyAndReturnArgs>(args?: SelectSubset<T, RecrutadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recrutador.
     * @param {RecrutadorDeleteArgs} args - Arguments to delete one Recrutador.
     * @example
     * // Delete one Recrutador
     * const Recrutador = await prisma.recrutador.delete({
     *   where: {
     *     // ... filter to delete one Recrutador
     *   }
     * })
     * 
     */
    delete<T extends RecrutadorDeleteArgs>(args: SelectSubset<T, RecrutadorDeleteArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recrutador.
     * @param {RecrutadorUpdateArgs} args - Arguments to update one Recrutador.
     * @example
     * // Update one Recrutador
     * const recrutador = await prisma.recrutador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecrutadorUpdateArgs>(args: SelectSubset<T, RecrutadorUpdateArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recrutadors.
     * @param {RecrutadorDeleteManyArgs} args - Arguments to filter Recrutadors to delete.
     * @example
     * // Delete a few Recrutadors
     * const { count } = await prisma.recrutador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecrutadorDeleteManyArgs>(args?: SelectSubset<T, RecrutadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recrutadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecrutadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recrutadors
     * const recrutador = await prisma.recrutador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecrutadorUpdateManyArgs>(args: SelectSubset<T, RecrutadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recrutadors and returns the data updated in the database.
     * @param {RecrutadorUpdateManyAndReturnArgs} args - Arguments to update many Recrutadors.
     * @example
     * // Update many Recrutadors
     * const recrutador = await prisma.recrutador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recrutadors and only return the `id_recrutador`
     * const recrutadorWithId_recrutadorOnly = await prisma.recrutador.updateManyAndReturn({
     *   select: { id_recrutador: true },
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
    updateManyAndReturn<T extends RecrutadorUpdateManyAndReturnArgs>(args: SelectSubset<T, RecrutadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recrutador.
     * @param {RecrutadorUpsertArgs} args - Arguments to update or create a Recrutador.
     * @example
     * // Update or create a Recrutador
     * const recrutador = await prisma.recrutador.upsert({
     *   create: {
     *     // ... data to create a Recrutador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recrutador we want to update
     *   }
     * })
     */
    upsert<T extends RecrutadorUpsertArgs>(args: SelectSubset<T, RecrutadorUpsertArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recrutadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecrutadorCountArgs} args - Arguments to filter Recrutadors to count.
     * @example
     * // Count the number of Recrutadors
     * const count = await prisma.recrutador.count({
     *   where: {
     *     // ... the filter for the Recrutadors we want to count
     *   }
     * })
    **/
    count<T extends RecrutadorCountArgs>(
      args?: Subset<T, RecrutadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecrutadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recrutador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecrutadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecrutadorAggregateArgs>(args: Subset<T, RecrutadorAggregateArgs>): Prisma.PrismaPromise<GetRecrutadorAggregateType<T>>

    /**
     * Group by Recrutador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecrutadorGroupByArgs} args - Group by arguments.
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
      T extends RecrutadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecrutadorGroupByArgs['orderBy'] }
        : { orderBy?: RecrutadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecrutadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecrutadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recrutador model
   */
  readonly fields: RecrutadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recrutador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecrutadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contratacoes<T extends Recrutador$contratacoesArgs<ExtArgs> = {}>(args?: Subset<T, Recrutador$contratacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recrutador model
   */
  interface RecrutadorFieldRefs {
    readonly id_recrutador: FieldRef<"Recrutador", 'String'>
    readonly nome: FieldRef<"Recrutador", 'String'>
    readonly email: FieldRef<"Recrutador", 'String'>
    readonly senha: FieldRef<"Recrutador", 'String'>
    readonly cargo: FieldRef<"Recrutador", 'String'>
    readonly telefone: FieldRef<"Recrutador", 'String'>
    readonly id_empresa: FieldRef<"Recrutador", 'String'>
    readonly data_criacao: FieldRef<"Recrutador", 'DateTime'>
    readonly data_atualizacao: FieldRef<"Recrutador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recrutador findUnique
   */
  export type RecrutadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * Filter, which Recrutador to fetch.
     */
    where: RecrutadorWhereUniqueInput
  }

  /**
   * Recrutador findUniqueOrThrow
   */
  export type RecrutadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * Filter, which Recrutador to fetch.
     */
    where: RecrutadorWhereUniqueInput
  }

  /**
   * Recrutador findFirst
   */
  export type RecrutadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * Filter, which Recrutador to fetch.
     */
    where?: RecrutadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recrutadors to fetch.
     */
    orderBy?: RecrutadorOrderByWithRelationInput | RecrutadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recrutadors.
     */
    cursor?: RecrutadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recrutadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recrutadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recrutadors.
     */
    distinct?: RecrutadorScalarFieldEnum | RecrutadorScalarFieldEnum[]
  }

  /**
   * Recrutador findFirstOrThrow
   */
  export type RecrutadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * Filter, which Recrutador to fetch.
     */
    where?: RecrutadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recrutadors to fetch.
     */
    orderBy?: RecrutadorOrderByWithRelationInput | RecrutadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recrutadors.
     */
    cursor?: RecrutadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recrutadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recrutadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recrutadors.
     */
    distinct?: RecrutadorScalarFieldEnum | RecrutadorScalarFieldEnum[]
  }

  /**
   * Recrutador findMany
   */
  export type RecrutadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * Filter, which Recrutadors to fetch.
     */
    where?: RecrutadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recrutadors to fetch.
     */
    orderBy?: RecrutadorOrderByWithRelationInput | RecrutadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recrutadors.
     */
    cursor?: RecrutadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recrutadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recrutadors.
     */
    skip?: number
    distinct?: RecrutadorScalarFieldEnum | RecrutadorScalarFieldEnum[]
  }

  /**
   * Recrutador create
   */
  export type RecrutadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Recrutador.
     */
    data: XOR<RecrutadorCreateInput, RecrutadorUncheckedCreateInput>
  }

  /**
   * Recrutador createMany
   */
  export type RecrutadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recrutadors.
     */
    data: RecrutadorCreateManyInput | RecrutadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recrutador createManyAndReturn
   */
  export type RecrutadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * The data used to create many Recrutadors.
     */
    data: RecrutadorCreateManyInput | RecrutadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recrutador update
   */
  export type RecrutadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Recrutador.
     */
    data: XOR<RecrutadorUpdateInput, RecrutadorUncheckedUpdateInput>
    /**
     * Choose, which Recrutador to update.
     */
    where: RecrutadorWhereUniqueInput
  }

  /**
   * Recrutador updateMany
   */
  export type RecrutadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recrutadors.
     */
    data: XOR<RecrutadorUpdateManyMutationInput, RecrutadorUncheckedUpdateManyInput>
    /**
     * Filter which Recrutadors to update
     */
    where?: RecrutadorWhereInput
    /**
     * Limit how many Recrutadors to update.
     */
    limit?: number
  }

  /**
   * Recrutador updateManyAndReturn
   */
  export type RecrutadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * The data used to update Recrutadors.
     */
    data: XOR<RecrutadorUpdateManyMutationInput, RecrutadorUncheckedUpdateManyInput>
    /**
     * Filter which Recrutadors to update
     */
    where?: RecrutadorWhereInput
    /**
     * Limit how many Recrutadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recrutador upsert
   */
  export type RecrutadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Recrutador to update in case it exists.
     */
    where: RecrutadorWhereUniqueInput
    /**
     * In case the Recrutador found by the `where` argument doesn't exist, create a new Recrutador with this data.
     */
    create: XOR<RecrutadorCreateInput, RecrutadorUncheckedCreateInput>
    /**
     * In case the Recrutador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecrutadorUpdateInput, RecrutadorUncheckedUpdateInput>
  }

  /**
   * Recrutador delete
   */
  export type RecrutadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    /**
     * Filter which Recrutador to delete.
     */
    where: RecrutadorWhereUniqueInput
  }

  /**
   * Recrutador deleteMany
   */
  export type RecrutadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recrutadors to delete
     */
    where?: RecrutadorWhereInput
    /**
     * Limit how many Recrutadors to delete.
     */
    limit?: number
  }

  /**
   * Recrutador.contratacoes
   */
  export type Recrutador$contratacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    where?: ContratacaoWhereInput
    orderBy?: ContratacaoOrderByWithRelationInput | ContratacaoOrderByWithRelationInput[]
    cursor?: ContratacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratacaoScalarFieldEnum | ContratacaoScalarFieldEnum[]
  }

  /**
   * Recrutador without action
   */
  export type RecrutadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
  }


  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    id_empresa: string | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    setor: string | null
    descricao: string | null
    website: string | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id_empresa: string | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    setor: string | null
    descricao: string | null
    website: string | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    id_empresa: number
    nome: number
    cnpj: number
    endereco: number
    setor: number
    descricao: number
    website: number
    data_criacao: number
    data_atualizacao: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    id_empresa?: true
    nome?: true
    cnpj?: true
    endereco?: true
    setor?: true
    descricao?: true
    website?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id_empresa?: true
    nome?: true
    cnpj?: true
    endereco?: true
    setor?: true
    descricao?: true
    website?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type EmpresaCountAggregateInputType = {
    id_empresa?: true
    nome?: true
    cnpj?: true
    endereco?: true
    setor?: true
    descricao?: true
    website?: true
    data_criacao?: true
    data_atualizacao?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id_empresa: string
    nome: string
    cnpj: string
    endereco: string
    setor: string
    descricao: string | null
    website: string | null
    data_criacao: Date
    data_atualizacao: Date
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empresa?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    setor?: boolean
    descricao?: boolean
    website?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    recrutadores?: boolean | Empresa$recrutadoresArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empresa?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    setor?: boolean
    descricao?: boolean
    website?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empresa?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    setor?: boolean
    descricao?: boolean
    website?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id_empresa?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    setor?: boolean
    descricao?: boolean
    website?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_empresa" | "nome" | "cnpj" | "endereco" | "setor" | "descricao" | "website" | "data_criacao" | "data_atualizacao", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recrutadores?: boolean | Empresa$recrutadoresArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      recrutadores: Prisma.$RecrutadorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_empresa: string
      nome: string
      cnpj: string
      endereco: string
      setor: string
      descricao: string | null
      website: string | null
      data_criacao: Date
      data_atualizacao: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id_empresa`
     * const empresaWithId_empresaOnly = await prisma.empresa.findMany({ select: { id_empresa: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id_empresa`
     * const empresaWithId_empresaOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id_empresa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id_empresa`
     * const empresaWithId_empresaOnly = await prisma.empresa.updateManyAndReturn({
     *   select: { id_empresa: true },
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
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recrutadores<T extends Empresa$recrutadoresArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$recrutadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id_empresa: FieldRef<"Empresa", 'String'>
    readonly nome: FieldRef<"Empresa", 'String'>
    readonly cnpj: FieldRef<"Empresa", 'String'>
    readonly endereco: FieldRef<"Empresa", 'String'>
    readonly setor: FieldRef<"Empresa", 'String'>
    readonly descricao: FieldRef<"Empresa", 'String'>
    readonly website: FieldRef<"Empresa", 'String'>
    readonly data_criacao: FieldRef<"Empresa", 'DateTime'>
    readonly data_atualizacao: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.recrutadores
   */
  export type Empresa$recrutadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recrutador
     */
    select?: RecrutadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recrutador
     */
    omit?: RecrutadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecrutadorInclude<ExtArgs> | null
    where?: RecrutadorWhereInput
    orderBy?: RecrutadorOrderByWithRelationInput | RecrutadorOrderByWithRelationInput[]
    cursor?: RecrutadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecrutadorScalarFieldEnum | RecrutadorScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoAvgAggregateOutputType = {
    semestre_atual: number | null
    solicitacoes: number | null
  }

  export type AlunoSumAggregateOutputType = {
    semestre_atual: number | null
    solicitacoes: number | null
  }

  export type AlunoMinAggregateOutputType = {
    id_aluno: string | null
    nome: string | null
    email: string | null
    senha: string | null
    matricula: string | null
    curso: string | null
    semestre_atual: number | null
    cpf: string | null
    telefone: string | null
    data_nascimento: Date | null
    endereco: string | null
    linkedin: string | null
    github: string | null
    portfolio: string | null
    solicitacoes: number | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type AlunoMaxAggregateOutputType = {
    id_aluno: string | null
    nome: string | null
    email: string | null
    senha: string | null
    matricula: string | null
    curso: string | null
    semestre_atual: number | null
    cpf: string | null
    telefone: string | null
    data_nascimento: Date | null
    endereco: string | null
    linkedin: string | null
    github: string | null
    portfolio: string | null
    solicitacoes: number | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type AlunoCountAggregateOutputType = {
    id_aluno: number
    nome: number
    email: number
    senha: number
    matricula: number
    curso: number
    semestre_atual: number
    cpf: number
    telefone: number
    data_nascimento: number
    endereco: number
    linkedin: number
    github: number
    portfolio: number
    solicitacoes: number
    data_criacao: number
    data_atualizacao: number
    _all: number
  }


  export type AlunoAvgAggregateInputType = {
    semestre_atual?: true
    solicitacoes?: true
  }

  export type AlunoSumAggregateInputType = {
    semestre_atual?: true
    solicitacoes?: true
  }

  export type AlunoMinAggregateInputType = {
    id_aluno?: true
    nome?: true
    email?: true
    senha?: true
    matricula?: true
    curso?: true
    semestre_atual?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    endereco?: true
    linkedin?: true
    github?: true
    portfolio?: true
    solicitacoes?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type AlunoMaxAggregateInputType = {
    id_aluno?: true
    nome?: true
    email?: true
    senha?: true
    matricula?: true
    curso?: true
    semestre_atual?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    endereco?: true
    linkedin?: true
    github?: true
    portfolio?: true
    solicitacoes?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type AlunoCountAggregateInputType = {
    id_aluno?: true
    nome?: true
    email?: true
    senha?: true
    matricula?: true
    curso?: true
    semestre_atual?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    endereco?: true
    linkedin?: true
    github?: true
    portfolio?: true
    solicitacoes?: true
    data_criacao?: true
    data_atualizacao?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _avg?: AlunoAvgAggregateInputType
    _sum?: AlunoSumAggregateInputType
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id_aluno: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date
    endereco: string
    linkedin: string | null
    github: string | null
    portfolio: string | null
    solicitacoes: number
    data_criacao: Date
    data_atualizacao: Date
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    matricula?: boolean
    curso?: boolean
    semestre_atual?: boolean
    cpf?: boolean
    telefone?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    solicitacoes?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    contratacoes?: boolean | Aluno$contratacoesArgs<ExtArgs>
    notas?: boolean | Aluno$notasArgs<ExtArgs>
    aptidoes?: boolean | Aluno$aptidoesArgs<ExtArgs>
    softskills?: boolean | Aluno$softskillsArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    matricula?: boolean
    curso?: boolean
    semestre_atual?: boolean
    cpf?: boolean
    telefone?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    solicitacoes?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    matricula?: boolean
    curso?: boolean
    semestre_atual?: boolean
    cpf?: boolean
    telefone?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    solicitacoes?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectScalar = {
    id_aluno?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    matricula?: boolean
    curso?: boolean
    semestre_atual?: boolean
    cpf?: boolean
    telefone?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    solicitacoes?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_aluno" | "nome" | "email" | "senha" | "matricula" | "curso" | "semestre_atual" | "cpf" | "telefone" | "data_nascimento" | "endereco" | "linkedin" | "github" | "portfolio" | "solicitacoes" | "data_criacao" | "data_atualizacao", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratacoes?: boolean | Aluno$contratacoesArgs<ExtArgs>
    notas?: boolean | Aluno$notasArgs<ExtArgs>
    aptidoes?: boolean | Aluno$aptidoesArgs<ExtArgs>
    softskills?: boolean | Aluno$softskillsArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlunoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlunoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      contratacoes: Prisma.$ContratacaoPayload<ExtArgs>[]
      notas: Prisma.$NotaPayload<ExtArgs>[]
      aptidoes: Prisma.$AptidaoPayload<ExtArgs>[]
      softskills: Prisma.$SoftSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_aluno: string
      nome: string
      email: string
      senha: string
      matricula: string
      curso: string
      semestre_atual: number
      cpf: string
      telefone: string
      data_nascimento: Date
      endereco: string
      linkedin: string | null
      github: string | null
      portfolio: string | null
      solicitacoes: number
      data_criacao: Date
      data_atualizacao: Date
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.findMany({ select: { id_aluno: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alunos and returns the data saved in the database.
     * @param {AlunoCreateManyAndReturnArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alunos and only return the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.createManyAndReturn({
     *   select: { id_aluno: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos and returns the data updated in the database.
     * @param {AlunoUpdateManyAndReturnArgs} args - Arguments to update many Alunos.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alunos and only return the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.updateManyAndReturn({
     *   select: { id_aluno: true },
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
    updateManyAndReturn<T extends AlunoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlunoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contratacoes<T extends Aluno$contratacoesArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$contratacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notas<T extends Aluno$notasArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aptidoes<T extends Aluno$aptidoesArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$aptidoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    softskills<T extends Aluno$softskillsArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$softskillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly id_aluno: FieldRef<"Aluno", 'String'>
    readonly nome: FieldRef<"Aluno", 'String'>
    readonly email: FieldRef<"Aluno", 'String'>
    readonly senha: FieldRef<"Aluno", 'String'>
    readonly matricula: FieldRef<"Aluno", 'String'>
    readonly curso: FieldRef<"Aluno", 'String'>
    readonly semestre_atual: FieldRef<"Aluno", 'Int'>
    readonly cpf: FieldRef<"Aluno", 'String'>
    readonly telefone: FieldRef<"Aluno", 'String'>
    readonly data_nascimento: FieldRef<"Aluno", 'DateTime'>
    readonly endereco: FieldRef<"Aluno", 'String'>
    readonly linkedin: FieldRef<"Aluno", 'String'>
    readonly github: FieldRef<"Aluno", 'String'>
    readonly portfolio: FieldRef<"Aluno", 'String'>
    readonly solicitacoes: FieldRef<"Aluno", 'Int'>
    readonly data_criacao: FieldRef<"Aluno", 'DateTime'>
    readonly data_atualizacao: FieldRef<"Aluno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno createManyAndReturn
   */
  export type AlunoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno updateManyAndReturn
   */
  export type AlunoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.contratacoes
   */
  export type Aluno$contratacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    where?: ContratacaoWhereInput
    orderBy?: ContratacaoOrderByWithRelationInput | ContratacaoOrderByWithRelationInput[]
    cursor?: ContratacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratacaoScalarFieldEnum | ContratacaoScalarFieldEnum[]
  }

  /**
   * Aluno.notas
   */
  export type Aluno$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    where?: NotaWhereInput
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    cursor?: NotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotaScalarFieldEnum | NotaScalarFieldEnum[]
  }

  /**
   * Aluno.aptidoes
   */
  export type Aluno$aptidoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    where?: AptidaoWhereInput
    orderBy?: AptidaoOrderByWithRelationInput | AptidaoOrderByWithRelationInput[]
    cursor?: AptidaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AptidaoScalarFieldEnum | AptidaoScalarFieldEnum[]
  }

  /**
   * Aluno.softskills
   */
  export type Aluno$softskillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    where?: SoftSkillWhereInput
    orderBy?: SoftSkillOrderByWithRelationInput | SoftSkillOrderByWithRelationInput[]
    cursor?: SoftSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoftSkillScalarFieldEnum | SoftSkillScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model Contratacao
   */

  export type AggregateContratacao = {
    _count: ContratacaoCountAggregateOutputType | null
    _avg: ContratacaoAvgAggregateOutputType | null
    _sum: ContratacaoSumAggregateOutputType | null
    _min: ContratacaoMinAggregateOutputType | null
    _max: ContratacaoMaxAggregateOutputType | null
  }

  export type ContratacaoAvgAggregateOutputType = {
    salario: number | null
  }

  export type ContratacaoSumAggregateOutputType = {
    salario: number | null
  }

  export type ContratacaoMinAggregateOutputType = {
    id_contratacao: string | null
    id_recrutador: string | null
    id_aluno: string | null
    data_contratacao: Date | null
    cargo: string | null
    salario: number | null
    status: string | null
  }

  export type ContratacaoMaxAggregateOutputType = {
    id_contratacao: string | null
    id_recrutador: string | null
    id_aluno: string | null
    data_contratacao: Date | null
    cargo: string | null
    salario: number | null
    status: string | null
  }

  export type ContratacaoCountAggregateOutputType = {
    id_contratacao: number
    id_recrutador: number
    id_aluno: number
    data_contratacao: number
    cargo: number
    salario: number
    status: number
    _all: number
  }


  export type ContratacaoAvgAggregateInputType = {
    salario?: true
  }

  export type ContratacaoSumAggregateInputType = {
    salario?: true
  }

  export type ContratacaoMinAggregateInputType = {
    id_contratacao?: true
    id_recrutador?: true
    id_aluno?: true
    data_contratacao?: true
    cargo?: true
    salario?: true
    status?: true
  }

  export type ContratacaoMaxAggregateInputType = {
    id_contratacao?: true
    id_recrutador?: true
    id_aluno?: true
    data_contratacao?: true
    cargo?: true
    salario?: true
    status?: true
  }

  export type ContratacaoCountAggregateInputType = {
    id_contratacao?: true
    id_recrutador?: true
    id_aluno?: true
    data_contratacao?: true
    cargo?: true
    salario?: true
    status?: true
    _all?: true
  }

  export type ContratacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contratacao to aggregate.
     */
    where?: ContratacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratacaos to fetch.
     */
    orderBy?: ContratacaoOrderByWithRelationInput | ContratacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContratacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contratacaos
    **/
    _count?: true | ContratacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContratacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContratacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContratacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContratacaoMaxAggregateInputType
  }

  export type GetContratacaoAggregateType<T extends ContratacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateContratacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContratacao[P]>
      : GetScalarType<T[P], AggregateContratacao[P]>
  }




  export type ContratacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratacaoWhereInput
    orderBy?: ContratacaoOrderByWithAggregationInput | ContratacaoOrderByWithAggregationInput[]
    by: ContratacaoScalarFieldEnum[] | ContratacaoScalarFieldEnum
    having?: ContratacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContratacaoCountAggregateInputType | true
    _avg?: ContratacaoAvgAggregateInputType
    _sum?: ContratacaoSumAggregateInputType
    _min?: ContratacaoMinAggregateInputType
    _max?: ContratacaoMaxAggregateInputType
  }

  export type ContratacaoGroupByOutputType = {
    id_contratacao: string
    id_recrutador: string
    id_aluno: string
    data_contratacao: Date
    cargo: string
    salario: number | null
    status: string
    _count: ContratacaoCountAggregateOutputType | null
    _avg: ContratacaoAvgAggregateOutputType | null
    _sum: ContratacaoSumAggregateOutputType | null
    _min: ContratacaoMinAggregateOutputType | null
    _max: ContratacaoMaxAggregateOutputType | null
  }

  type GetContratacaoGroupByPayload<T extends ContratacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContratacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContratacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContratacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ContratacaoGroupByOutputType[P]>
        }
      >
    >


  export type ContratacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contratacao?: boolean
    id_recrutador?: boolean
    id_aluno?: boolean
    data_contratacao?: boolean
    cargo?: boolean
    salario?: boolean
    status?: boolean
    recrutador?: boolean | RecrutadorDefaultArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contratacao"]>

  export type ContratacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contratacao?: boolean
    id_recrutador?: boolean
    id_aluno?: boolean
    data_contratacao?: boolean
    cargo?: boolean
    salario?: boolean
    status?: boolean
    recrutador?: boolean | RecrutadorDefaultArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contratacao"]>

  export type ContratacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contratacao?: boolean
    id_recrutador?: boolean
    id_aluno?: boolean
    data_contratacao?: boolean
    cargo?: boolean
    salario?: boolean
    status?: boolean
    recrutador?: boolean | RecrutadorDefaultArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contratacao"]>

  export type ContratacaoSelectScalar = {
    id_contratacao?: boolean
    id_recrutador?: boolean
    id_aluno?: boolean
    data_contratacao?: boolean
    cargo?: boolean
    salario?: boolean
    status?: boolean
  }

  export type ContratacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_contratacao" | "id_recrutador" | "id_aluno" | "data_contratacao" | "cargo" | "salario" | "status", ExtArgs["result"]["contratacao"]>
  export type ContratacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recrutador?: boolean | RecrutadorDefaultArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type ContratacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recrutador?: boolean | RecrutadorDefaultArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type ContratacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recrutador?: boolean | RecrutadorDefaultArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $ContratacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contratacao"
    objects: {
      recrutador: Prisma.$RecrutadorPayload<ExtArgs>
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_contratacao: string
      id_recrutador: string
      id_aluno: string
      data_contratacao: Date
      cargo: string
      salario: number | null
      status: string
    }, ExtArgs["result"]["contratacao"]>
    composites: {}
  }

  type ContratacaoGetPayload<S extends boolean | null | undefined | ContratacaoDefaultArgs> = $Result.GetResult<Prisma.$ContratacaoPayload, S>

  type ContratacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContratacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContratacaoCountAggregateInputType | true
    }

  export interface ContratacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contratacao'], meta: { name: 'Contratacao' } }
    /**
     * Find zero or one Contratacao that matches the filter.
     * @param {ContratacaoFindUniqueArgs} args - Arguments to find a Contratacao
     * @example
     * // Get one Contratacao
     * const contratacao = await prisma.contratacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContratacaoFindUniqueArgs>(args: SelectSubset<T, ContratacaoFindUniqueArgs<ExtArgs>>): Prisma__ContratacaoClient<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contratacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContratacaoFindUniqueOrThrowArgs} args - Arguments to find a Contratacao
     * @example
     * // Get one Contratacao
     * const contratacao = await prisma.contratacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContratacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContratacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContratacaoClient<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contratacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacaoFindFirstArgs} args - Arguments to find a Contratacao
     * @example
     * // Get one Contratacao
     * const contratacao = await prisma.contratacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContratacaoFindFirstArgs>(args?: SelectSubset<T, ContratacaoFindFirstArgs<ExtArgs>>): Prisma__ContratacaoClient<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contratacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacaoFindFirstOrThrowArgs} args - Arguments to find a Contratacao
     * @example
     * // Get one Contratacao
     * const contratacao = await prisma.contratacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContratacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContratacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContratacaoClient<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contratacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contratacaos
     * const contratacaos = await prisma.contratacao.findMany()
     * 
     * // Get first 10 Contratacaos
     * const contratacaos = await prisma.contratacao.findMany({ take: 10 })
     * 
     * // Only select the `id_contratacao`
     * const contratacaoWithId_contratacaoOnly = await prisma.contratacao.findMany({ select: { id_contratacao: true } })
     * 
     */
    findMany<T extends ContratacaoFindManyArgs>(args?: SelectSubset<T, ContratacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contratacao.
     * @param {ContratacaoCreateArgs} args - Arguments to create a Contratacao.
     * @example
     * // Create one Contratacao
     * const Contratacao = await prisma.contratacao.create({
     *   data: {
     *     // ... data to create a Contratacao
     *   }
     * })
     * 
     */
    create<T extends ContratacaoCreateArgs>(args: SelectSubset<T, ContratacaoCreateArgs<ExtArgs>>): Prisma__ContratacaoClient<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contratacaos.
     * @param {ContratacaoCreateManyArgs} args - Arguments to create many Contratacaos.
     * @example
     * // Create many Contratacaos
     * const contratacao = await prisma.contratacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContratacaoCreateManyArgs>(args?: SelectSubset<T, ContratacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contratacaos and returns the data saved in the database.
     * @param {ContratacaoCreateManyAndReturnArgs} args - Arguments to create many Contratacaos.
     * @example
     * // Create many Contratacaos
     * const contratacao = await prisma.contratacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contratacaos and only return the `id_contratacao`
     * const contratacaoWithId_contratacaoOnly = await prisma.contratacao.createManyAndReturn({
     *   select: { id_contratacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContratacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContratacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contratacao.
     * @param {ContratacaoDeleteArgs} args - Arguments to delete one Contratacao.
     * @example
     * // Delete one Contratacao
     * const Contratacao = await prisma.contratacao.delete({
     *   where: {
     *     // ... filter to delete one Contratacao
     *   }
     * })
     * 
     */
    delete<T extends ContratacaoDeleteArgs>(args: SelectSubset<T, ContratacaoDeleteArgs<ExtArgs>>): Prisma__ContratacaoClient<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contratacao.
     * @param {ContratacaoUpdateArgs} args - Arguments to update one Contratacao.
     * @example
     * // Update one Contratacao
     * const contratacao = await prisma.contratacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContratacaoUpdateArgs>(args: SelectSubset<T, ContratacaoUpdateArgs<ExtArgs>>): Prisma__ContratacaoClient<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contratacaos.
     * @param {ContratacaoDeleteManyArgs} args - Arguments to filter Contratacaos to delete.
     * @example
     * // Delete a few Contratacaos
     * const { count } = await prisma.contratacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContratacaoDeleteManyArgs>(args?: SelectSubset<T, ContratacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contratacaos
     * const contratacao = await prisma.contratacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContratacaoUpdateManyArgs>(args: SelectSubset<T, ContratacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratacaos and returns the data updated in the database.
     * @param {ContratacaoUpdateManyAndReturnArgs} args - Arguments to update many Contratacaos.
     * @example
     * // Update many Contratacaos
     * const contratacao = await prisma.contratacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contratacaos and only return the `id_contratacao`
     * const contratacaoWithId_contratacaoOnly = await prisma.contratacao.updateManyAndReturn({
     *   select: { id_contratacao: true },
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
    updateManyAndReturn<T extends ContratacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContratacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contratacao.
     * @param {ContratacaoUpsertArgs} args - Arguments to update or create a Contratacao.
     * @example
     * // Update or create a Contratacao
     * const contratacao = await prisma.contratacao.upsert({
     *   create: {
     *     // ... data to create a Contratacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contratacao we want to update
     *   }
     * })
     */
    upsert<T extends ContratacaoUpsertArgs>(args: SelectSubset<T, ContratacaoUpsertArgs<ExtArgs>>): Prisma__ContratacaoClient<$Result.GetResult<Prisma.$ContratacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contratacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacaoCountArgs} args - Arguments to filter Contratacaos to count.
     * @example
     * // Count the number of Contratacaos
     * const count = await prisma.contratacao.count({
     *   where: {
     *     // ... the filter for the Contratacaos we want to count
     *   }
     * })
    **/
    count<T extends ContratacaoCountArgs>(
      args?: Subset<T, ContratacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContratacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contratacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContratacaoAggregateArgs>(args: Subset<T, ContratacaoAggregateArgs>): Prisma.PrismaPromise<GetContratacaoAggregateType<T>>

    /**
     * Group by Contratacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacaoGroupByArgs} args - Group by arguments.
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
      T extends ContratacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContratacaoGroupByArgs['orderBy'] }
        : { orderBy?: ContratacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContratacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contratacao model
   */
  readonly fields: ContratacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contratacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContratacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recrutador<T extends RecrutadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecrutadorDefaultArgs<ExtArgs>>): Prisma__RecrutadorClient<$Result.GetResult<Prisma.$RecrutadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contratacao model
   */
  interface ContratacaoFieldRefs {
    readonly id_contratacao: FieldRef<"Contratacao", 'String'>
    readonly id_recrutador: FieldRef<"Contratacao", 'String'>
    readonly id_aluno: FieldRef<"Contratacao", 'String'>
    readonly data_contratacao: FieldRef<"Contratacao", 'DateTime'>
    readonly cargo: FieldRef<"Contratacao", 'String'>
    readonly salario: FieldRef<"Contratacao", 'Float'>
    readonly status: FieldRef<"Contratacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contratacao findUnique
   */
  export type ContratacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * Filter, which Contratacao to fetch.
     */
    where: ContratacaoWhereUniqueInput
  }

  /**
   * Contratacao findUniqueOrThrow
   */
  export type ContratacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * Filter, which Contratacao to fetch.
     */
    where: ContratacaoWhereUniqueInput
  }

  /**
   * Contratacao findFirst
   */
  export type ContratacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * Filter, which Contratacao to fetch.
     */
    where?: ContratacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratacaos to fetch.
     */
    orderBy?: ContratacaoOrderByWithRelationInput | ContratacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contratacaos.
     */
    cursor?: ContratacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratacaos.
     */
    distinct?: ContratacaoScalarFieldEnum | ContratacaoScalarFieldEnum[]
  }

  /**
   * Contratacao findFirstOrThrow
   */
  export type ContratacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * Filter, which Contratacao to fetch.
     */
    where?: ContratacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratacaos to fetch.
     */
    orderBy?: ContratacaoOrderByWithRelationInput | ContratacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contratacaos.
     */
    cursor?: ContratacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratacaos.
     */
    distinct?: ContratacaoScalarFieldEnum | ContratacaoScalarFieldEnum[]
  }

  /**
   * Contratacao findMany
   */
  export type ContratacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * Filter, which Contratacaos to fetch.
     */
    where?: ContratacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratacaos to fetch.
     */
    orderBy?: ContratacaoOrderByWithRelationInput | ContratacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contratacaos.
     */
    cursor?: ContratacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratacaos.
     */
    skip?: number
    distinct?: ContratacaoScalarFieldEnum | ContratacaoScalarFieldEnum[]
  }

  /**
   * Contratacao create
   */
  export type ContratacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Contratacao.
     */
    data: XOR<ContratacaoCreateInput, ContratacaoUncheckedCreateInput>
  }

  /**
   * Contratacao createMany
   */
  export type ContratacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contratacaos.
     */
    data: ContratacaoCreateManyInput | ContratacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contratacao createManyAndReturn
   */
  export type ContratacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Contratacaos.
     */
    data: ContratacaoCreateManyInput | ContratacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contratacao update
   */
  export type ContratacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Contratacao.
     */
    data: XOR<ContratacaoUpdateInput, ContratacaoUncheckedUpdateInput>
    /**
     * Choose, which Contratacao to update.
     */
    where: ContratacaoWhereUniqueInput
  }

  /**
   * Contratacao updateMany
   */
  export type ContratacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contratacaos.
     */
    data: XOR<ContratacaoUpdateManyMutationInput, ContratacaoUncheckedUpdateManyInput>
    /**
     * Filter which Contratacaos to update
     */
    where?: ContratacaoWhereInput
    /**
     * Limit how many Contratacaos to update.
     */
    limit?: number
  }

  /**
   * Contratacao updateManyAndReturn
   */
  export type ContratacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * The data used to update Contratacaos.
     */
    data: XOR<ContratacaoUpdateManyMutationInput, ContratacaoUncheckedUpdateManyInput>
    /**
     * Filter which Contratacaos to update
     */
    where?: ContratacaoWhereInput
    /**
     * Limit how many Contratacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contratacao upsert
   */
  export type ContratacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Contratacao to update in case it exists.
     */
    where: ContratacaoWhereUniqueInput
    /**
     * In case the Contratacao found by the `where` argument doesn't exist, create a new Contratacao with this data.
     */
    create: XOR<ContratacaoCreateInput, ContratacaoUncheckedCreateInput>
    /**
     * In case the Contratacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContratacaoUpdateInput, ContratacaoUncheckedUpdateInput>
  }

  /**
   * Contratacao delete
   */
  export type ContratacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
    /**
     * Filter which Contratacao to delete.
     */
    where: ContratacaoWhereUniqueInput
  }

  /**
   * Contratacao deleteMany
   */
  export type ContratacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contratacaos to delete
     */
    where?: ContratacaoWhereInput
    /**
     * Limit how many Contratacaos to delete.
     */
    limit?: number
  }

  /**
   * Contratacao without action
   */
  export type ContratacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacao
     */
    select?: ContratacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacao
     */
    omit?: ContratacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacaoInclude<ExtArgs> | null
  }


  /**
   * Model Nota
   */

  export type AggregateNota = {
    _count: NotaCountAggregateOutputType | null
    _avg: NotaAvgAggregateOutputType | null
    _sum: NotaSumAggregateOutputType | null
    _min: NotaMinAggregateOutputType | null
    _max: NotaMaxAggregateOutputType | null
  }

  export type NotaAvgAggregateOutputType = {
    nota: number | null
    semestre: number | null
  }

  export type NotaSumAggregateOutputType = {
    nota: number | null
    semestre: number | null
  }

  export type NotaMinAggregateOutputType = {
    id_nota: string | null
    id_aluno: string | null
    disciplina: string | null
    nota: number | null
    semestre: number | null
  }

  export type NotaMaxAggregateOutputType = {
    id_nota: string | null
    id_aluno: string | null
    disciplina: string | null
    nota: number | null
    semestre: number | null
  }

  export type NotaCountAggregateOutputType = {
    id_nota: number
    id_aluno: number
    disciplina: number
    nota: number
    semestre: number
    _all: number
  }


  export type NotaAvgAggregateInputType = {
    nota?: true
    semestre?: true
  }

  export type NotaSumAggregateInputType = {
    nota?: true
    semestre?: true
  }

  export type NotaMinAggregateInputType = {
    id_nota?: true
    id_aluno?: true
    disciplina?: true
    nota?: true
    semestre?: true
  }

  export type NotaMaxAggregateInputType = {
    id_nota?: true
    id_aluno?: true
    disciplina?: true
    nota?: true
    semestre?: true
  }

  export type NotaCountAggregateInputType = {
    id_nota?: true
    id_aluno?: true
    disciplina?: true
    nota?: true
    semestre?: true
    _all?: true
  }

  export type NotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nota to aggregate.
     */
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notas
    **/
    _count?: true | NotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotaMaxAggregateInputType
  }

  export type GetNotaAggregateType<T extends NotaAggregateArgs> = {
        [P in keyof T & keyof AggregateNota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNota[P]>
      : GetScalarType<T[P], AggregateNota[P]>
  }




  export type NotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaWhereInput
    orderBy?: NotaOrderByWithAggregationInput | NotaOrderByWithAggregationInput[]
    by: NotaScalarFieldEnum[] | NotaScalarFieldEnum
    having?: NotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotaCountAggregateInputType | true
    _avg?: NotaAvgAggregateInputType
    _sum?: NotaSumAggregateInputType
    _min?: NotaMinAggregateInputType
    _max?: NotaMaxAggregateInputType
  }

  export type NotaGroupByOutputType = {
    id_nota: string
    id_aluno: string
    disciplina: string
    nota: number
    semestre: number
    _count: NotaCountAggregateOutputType | null
    _avg: NotaAvgAggregateOutputType | null
    _sum: NotaSumAggregateOutputType | null
    _min: NotaMinAggregateOutputType | null
    _max: NotaMaxAggregateOutputType | null
  }

  type GetNotaGroupByPayload<T extends NotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotaGroupByOutputType[P]>
            : GetScalarType<T[P], NotaGroupByOutputType[P]>
        }
      >
    >


  export type NotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_nota?: boolean
    id_aluno?: boolean
    disciplina?: boolean
    nota?: boolean
    semestre?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nota"]>

  export type NotaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_nota?: boolean
    id_aluno?: boolean
    disciplina?: boolean
    nota?: boolean
    semestre?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nota"]>

  export type NotaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_nota?: boolean
    id_aluno?: boolean
    disciplina?: boolean
    nota?: boolean
    semestre?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nota"]>

  export type NotaSelectScalar = {
    id_nota?: boolean
    id_aluno?: boolean
    disciplina?: boolean
    nota?: boolean
    semestre?: boolean
  }

  export type NotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_nota" | "id_aluno" | "disciplina" | "nota" | "semestre", ExtArgs["result"]["nota"]>
  export type NotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type NotaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type NotaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $NotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nota"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_nota: string
      id_aluno: string
      disciplina: string
      nota: number
      semestre: number
    }, ExtArgs["result"]["nota"]>
    composites: {}
  }

  type NotaGetPayload<S extends boolean | null | undefined | NotaDefaultArgs> = $Result.GetResult<Prisma.$NotaPayload, S>

  type NotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotaCountAggregateInputType | true
    }

  export interface NotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nota'], meta: { name: 'Nota' } }
    /**
     * Find zero or one Nota that matches the filter.
     * @param {NotaFindUniqueArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotaFindUniqueArgs>(args: SelectSubset<T, NotaFindUniqueArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotaFindUniqueOrThrowArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotaFindUniqueOrThrowArgs>(args: SelectSubset<T, NotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFindFirstArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotaFindFirstArgs>(args?: SelectSubset<T, NotaFindFirstArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFindFirstOrThrowArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotaFindFirstOrThrowArgs>(args?: SelectSubset<T, NotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notas
     * const notas = await prisma.nota.findMany()
     * 
     * // Get first 10 Notas
     * const notas = await prisma.nota.findMany({ take: 10 })
     * 
     * // Only select the `id_nota`
     * const notaWithId_notaOnly = await prisma.nota.findMany({ select: { id_nota: true } })
     * 
     */
    findMany<T extends NotaFindManyArgs>(args?: SelectSubset<T, NotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nota.
     * @param {NotaCreateArgs} args - Arguments to create a Nota.
     * @example
     * // Create one Nota
     * const Nota = await prisma.nota.create({
     *   data: {
     *     // ... data to create a Nota
     *   }
     * })
     * 
     */
    create<T extends NotaCreateArgs>(args: SelectSubset<T, NotaCreateArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notas.
     * @param {NotaCreateManyArgs} args - Arguments to create many Notas.
     * @example
     * // Create many Notas
     * const nota = await prisma.nota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotaCreateManyArgs>(args?: SelectSubset<T, NotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notas and returns the data saved in the database.
     * @param {NotaCreateManyAndReturnArgs} args - Arguments to create many Notas.
     * @example
     * // Create many Notas
     * const nota = await prisma.nota.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notas and only return the `id_nota`
     * const notaWithId_notaOnly = await prisma.nota.createManyAndReturn({
     *   select: { id_nota: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotaCreateManyAndReturnArgs>(args?: SelectSubset<T, NotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nota.
     * @param {NotaDeleteArgs} args - Arguments to delete one Nota.
     * @example
     * // Delete one Nota
     * const Nota = await prisma.nota.delete({
     *   where: {
     *     // ... filter to delete one Nota
     *   }
     * })
     * 
     */
    delete<T extends NotaDeleteArgs>(args: SelectSubset<T, NotaDeleteArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nota.
     * @param {NotaUpdateArgs} args - Arguments to update one Nota.
     * @example
     * // Update one Nota
     * const nota = await prisma.nota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotaUpdateArgs>(args: SelectSubset<T, NotaUpdateArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notas.
     * @param {NotaDeleteManyArgs} args - Arguments to filter Notas to delete.
     * @example
     * // Delete a few Notas
     * const { count } = await prisma.nota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotaDeleteManyArgs>(args?: SelectSubset<T, NotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notas
     * const nota = await prisma.nota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotaUpdateManyArgs>(args: SelectSubset<T, NotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notas and returns the data updated in the database.
     * @param {NotaUpdateManyAndReturnArgs} args - Arguments to update many Notas.
     * @example
     * // Update many Notas
     * const nota = await prisma.nota.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notas and only return the `id_nota`
     * const notaWithId_notaOnly = await prisma.nota.updateManyAndReturn({
     *   select: { id_nota: true },
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
    updateManyAndReturn<T extends NotaUpdateManyAndReturnArgs>(args: SelectSubset<T, NotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nota.
     * @param {NotaUpsertArgs} args - Arguments to update or create a Nota.
     * @example
     * // Update or create a Nota
     * const nota = await prisma.nota.upsert({
     *   create: {
     *     // ... data to create a Nota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nota we want to update
     *   }
     * })
     */
    upsert<T extends NotaUpsertArgs>(args: SelectSubset<T, NotaUpsertArgs<ExtArgs>>): Prisma__NotaClient<$Result.GetResult<Prisma.$NotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaCountArgs} args - Arguments to filter Notas to count.
     * @example
     * // Count the number of Notas
     * const count = await prisma.nota.count({
     *   where: {
     *     // ... the filter for the Notas we want to count
     *   }
     * })
    **/
    count<T extends NotaCountArgs>(
      args?: Subset<T, NotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotaAggregateArgs>(args: Subset<T, NotaAggregateArgs>): Prisma.PrismaPromise<GetNotaAggregateType<T>>

    /**
     * Group by Nota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaGroupByArgs} args - Group by arguments.
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
      T extends NotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotaGroupByArgs['orderBy'] }
        : { orderBy?: NotaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nota model
   */
  readonly fields: NotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Nota model
   */
  interface NotaFieldRefs {
    readonly id_nota: FieldRef<"Nota", 'String'>
    readonly id_aluno: FieldRef<"Nota", 'String'>
    readonly disciplina: FieldRef<"Nota", 'String'>
    readonly nota: FieldRef<"Nota", 'Float'>
    readonly semestre: FieldRef<"Nota", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Nota findUnique
   */
  export type NotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Nota to fetch.
     */
    where: NotaWhereUniqueInput
  }

  /**
   * Nota findUniqueOrThrow
   */
  export type NotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Nota to fetch.
     */
    where: NotaWhereUniqueInput
  }

  /**
   * Nota findFirst
   */
  export type NotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Nota to fetch.
     */
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notas.
     */
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notas.
     */
    distinct?: NotaScalarFieldEnum | NotaScalarFieldEnum[]
  }

  /**
   * Nota findFirstOrThrow
   */
  export type NotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Nota to fetch.
     */
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notas.
     */
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notas.
     */
    distinct?: NotaScalarFieldEnum | NotaScalarFieldEnum[]
  }

  /**
   * Nota findMany
   */
  export type NotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter, which Notas to fetch.
     */
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotaOrderByWithRelationInput | NotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notas.
     */
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    distinct?: NotaScalarFieldEnum | NotaScalarFieldEnum[]
  }

  /**
   * Nota create
   */
  export type NotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * The data needed to create a Nota.
     */
    data: XOR<NotaCreateInput, NotaUncheckedCreateInput>
  }

  /**
   * Nota createMany
   */
  export type NotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notas.
     */
    data: NotaCreateManyInput | NotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nota createManyAndReturn
   */
  export type NotaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * The data used to create many Notas.
     */
    data: NotaCreateManyInput | NotaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nota update
   */
  export type NotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * The data needed to update a Nota.
     */
    data: XOR<NotaUpdateInput, NotaUncheckedUpdateInput>
    /**
     * Choose, which Nota to update.
     */
    where: NotaWhereUniqueInput
  }

  /**
   * Nota updateMany
   */
  export type NotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notas.
     */
    data: XOR<NotaUpdateManyMutationInput, NotaUncheckedUpdateManyInput>
    /**
     * Filter which Notas to update
     */
    where?: NotaWhereInput
    /**
     * Limit how many Notas to update.
     */
    limit?: number
  }

  /**
   * Nota updateManyAndReturn
   */
  export type NotaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * The data used to update Notas.
     */
    data: XOR<NotaUpdateManyMutationInput, NotaUncheckedUpdateManyInput>
    /**
     * Filter which Notas to update
     */
    where?: NotaWhereInput
    /**
     * Limit how many Notas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nota upsert
   */
  export type NotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * The filter to search for the Nota to update in case it exists.
     */
    where: NotaWhereUniqueInput
    /**
     * In case the Nota found by the `where` argument doesn't exist, create a new Nota with this data.
     */
    create: XOR<NotaCreateInput, NotaUncheckedCreateInput>
    /**
     * In case the Nota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotaUpdateInput, NotaUncheckedUpdateInput>
  }

  /**
   * Nota delete
   */
  export type NotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
    /**
     * Filter which Nota to delete.
     */
    where: NotaWhereUniqueInput
  }

  /**
   * Nota deleteMany
   */
  export type NotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notas to delete
     */
    where?: NotaWhereInput
    /**
     * Limit how many Notas to delete.
     */
    limit?: number
  }

  /**
   * Nota without action
   */
  export type NotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nota
     */
    select?: NotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nota
     */
    omit?: NotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaInclude<ExtArgs> | null
  }


  /**
   * Model Aptidao
   */

  export type AggregateAptidao = {
    _count: AptidaoCountAggregateOutputType | null
    _avg: AptidaoAvgAggregateOutputType | null
    _sum: AptidaoSumAggregateOutputType | null
    _min: AptidaoMinAggregateOutputType | null
    _max: AptidaoMaxAggregateOutputType | null
  }

  export type AptidaoAvgAggregateOutputType = {
    nivel: number | null
  }

  export type AptidaoSumAggregateOutputType = {
    nivel: number | null
  }

  export type AptidaoMinAggregateOutputType = {
    id_aptidao: string | null
    id_aluno: string | null
    nome: string | null
    nivel: number | null
    descricao: string | null
  }

  export type AptidaoMaxAggregateOutputType = {
    id_aptidao: string | null
    id_aluno: string | null
    nome: string | null
    nivel: number | null
    descricao: string | null
  }

  export type AptidaoCountAggregateOutputType = {
    id_aptidao: number
    id_aluno: number
    nome: number
    nivel: number
    descricao: number
    _all: number
  }


  export type AptidaoAvgAggregateInputType = {
    nivel?: true
  }

  export type AptidaoSumAggregateInputType = {
    nivel?: true
  }

  export type AptidaoMinAggregateInputType = {
    id_aptidao?: true
    id_aluno?: true
    nome?: true
    nivel?: true
    descricao?: true
  }

  export type AptidaoMaxAggregateInputType = {
    id_aptidao?: true
    id_aluno?: true
    nome?: true
    nivel?: true
    descricao?: true
  }

  export type AptidaoCountAggregateInputType = {
    id_aptidao?: true
    id_aluno?: true
    nome?: true
    nivel?: true
    descricao?: true
    _all?: true
  }

  export type AptidaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aptidao to aggregate.
     */
    where?: AptidaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aptidaos to fetch.
     */
    orderBy?: AptidaoOrderByWithRelationInput | AptidaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AptidaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aptidaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aptidaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aptidaos
    **/
    _count?: true | AptidaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AptidaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AptidaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AptidaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AptidaoMaxAggregateInputType
  }

  export type GetAptidaoAggregateType<T extends AptidaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAptidao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAptidao[P]>
      : GetScalarType<T[P], AggregateAptidao[P]>
  }




  export type AptidaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AptidaoWhereInput
    orderBy?: AptidaoOrderByWithAggregationInput | AptidaoOrderByWithAggregationInput[]
    by: AptidaoScalarFieldEnum[] | AptidaoScalarFieldEnum
    having?: AptidaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AptidaoCountAggregateInputType | true
    _avg?: AptidaoAvgAggregateInputType
    _sum?: AptidaoSumAggregateInputType
    _min?: AptidaoMinAggregateInputType
    _max?: AptidaoMaxAggregateInputType
  }

  export type AptidaoGroupByOutputType = {
    id_aptidao: string
    id_aluno: string
    nome: string
    nivel: number
    descricao: string | null
    _count: AptidaoCountAggregateOutputType | null
    _avg: AptidaoAvgAggregateOutputType | null
    _sum: AptidaoSumAggregateOutputType | null
    _min: AptidaoMinAggregateOutputType | null
    _max: AptidaoMaxAggregateOutputType | null
  }

  type GetAptidaoGroupByPayload<T extends AptidaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AptidaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AptidaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AptidaoGroupByOutputType[P]>
            : GetScalarType<T[P], AptidaoGroupByOutputType[P]>
        }
      >
    >


  export type AptidaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aptidao?: boolean
    id_aluno?: boolean
    nome?: boolean
    nivel?: boolean
    descricao?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aptidao"]>

  export type AptidaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aptidao?: boolean
    id_aluno?: boolean
    nome?: boolean
    nivel?: boolean
    descricao?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aptidao"]>

  export type AptidaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aptidao?: boolean
    id_aluno?: boolean
    nome?: boolean
    nivel?: boolean
    descricao?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aptidao"]>

  export type AptidaoSelectScalar = {
    id_aptidao?: boolean
    id_aluno?: boolean
    nome?: boolean
    nivel?: boolean
    descricao?: boolean
  }

  export type AptidaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_aptidao" | "id_aluno" | "nome" | "nivel" | "descricao", ExtArgs["result"]["aptidao"]>
  export type AptidaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type AptidaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type AptidaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $AptidaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aptidao"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_aptidao: string
      id_aluno: string
      nome: string
      nivel: number
      descricao: string | null
    }, ExtArgs["result"]["aptidao"]>
    composites: {}
  }

  type AptidaoGetPayload<S extends boolean | null | undefined | AptidaoDefaultArgs> = $Result.GetResult<Prisma.$AptidaoPayload, S>

  type AptidaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AptidaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AptidaoCountAggregateInputType | true
    }

  export interface AptidaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aptidao'], meta: { name: 'Aptidao' } }
    /**
     * Find zero or one Aptidao that matches the filter.
     * @param {AptidaoFindUniqueArgs} args - Arguments to find a Aptidao
     * @example
     * // Get one Aptidao
     * const aptidao = await prisma.aptidao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AptidaoFindUniqueArgs>(args: SelectSubset<T, AptidaoFindUniqueArgs<ExtArgs>>): Prisma__AptidaoClient<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aptidao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AptidaoFindUniqueOrThrowArgs} args - Arguments to find a Aptidao
     * @example
     * // Get one Aptidao
     * const aptidao = await prisma.aptidao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AptidaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AptidaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AptidaoClient<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aptidao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptidaoFindFirstArgs} args - Arguments to find a Aptidao
     * @example
     * // Get one Aptidao
     * const aptidao = await prisma.aptidao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AptidaoFindFirstArgs>(args?: SelectSubset<T, AptidaoFindFirstArgs<ExtArgs>>): Prisma__AptidaoClient<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aptidao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptidaoFindFirstOrThrowArgs} args - Arguments to find a Aptidao
     * @example
     * // Get one Aptidao
     * const aptidao = await prisma.aptidao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AptidaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AptidaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AptidaoClient<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aptidaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptidaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aptidaos
     * const aptidaos = await prisma.aptidao.findMany()
     * 
     * // Get first 10 Aptidaos
     * const aptidaos = await prisma.aptidao.findMany({ take: 10 })
     * 
     * // Only select the `id_aptidao`
     * const aptidaoWithId_aptidaoOnly = await prisma.aptidao.findMany({ select: { id_aptidao: true } })
     * 
     */
    findMany<T extends AptidaoFindManyArgs>(args?: SelectSubset<T, AptidaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aptidao.
     * @param {AptidaoCreateArgs} args - Arguments to create a Aptidao.
     * @example
     * // Create one Aptidao
     * const Aptidao = await prisma.aptidao.create({
     *   data: {
     *     // ... data to create a Aptidao
     *   }
     * })
     * 
     */
    create<T extends AptidaoCreateArgs>(args: SelectSubset<T, AptidaoCreateArgs<ExtArgs>>): Prisma__AptidaoClient<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aptidaos.
     * @param {AptidaoCreateManyArgs} args - Arguments to create many Aptidaos.
     * @example
     * // Create many Aptidaos
     * const aptidao = await prisma.aptidao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AptidaoCreateManyArgs>(args?: SelectSubset<T, AptidaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aptidaos and returns the data saved in the database.
     * @param {AptidaoCreateManyAndReturnArgs} args - Arguments to create many Aptidaos.
     * @example
     * // Create many Aptidaos
     * const aptidao = await prisma.aptidao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aptidaos and only return the `id_aptidao`
     * const aptidaoWithId_aptidaoOnly = await prisma.aptidao.createManyAndReturn({
     *   select: { id_aptidao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AptidaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AptidaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aptidao.
     * @param {AptidaoDeleteArgs} args - Arguments to delete one Aptidao.
     * @example
     * // Delete one Aptidao
     * const Aptidao = await prisma.aptidao.delete({
     *   where: {
     *     // ... filter to delete one Aptidao
     *   }
     * })
     * 
     */
    delete<T extends AptidaoDeleteArgs>(args: SelectSubset<T, AptidaoDeleteArgs<ExtArgs>>): Prisma__AptidaoClient<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aptidao.
     * @param {AptidaoUpdateArgs} args - Arguments to update one Aptidao.
     * @example
     * // Update one Aptidao
     * const aptidao = await prisma.aptidao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AptidaoUpdateArgs>(args: SelectSubset<T, AptidaoUpdateArgs<ExtArgs>>): Prisma__AptidaoClient<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aptidaos.
     * @param {AptidaoDeleteManyArgs} args - Arguments to filter Aptidaos to delete.
     * @example
     * // Delete a few Aptidaos
     * const { count } = await prisma.aptidao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AptidaoDeleteManyArgs>(args?: SelectSubset<T, AptidaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aptidaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptidaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aptidaos
     * const aptidao = await prisma.aptidao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AptidaoUpdateManyArgs>(args: SelectSubset<T, AptidaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aptidaos and returns the data updated in the database.
     * @param {AptidaoUpdateManyAndReturnArgs} args - Arguments to update many Aptidaos.
     * @example
     * // Update many Aptidaos
     * const aptidao = await prisma.aptidao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aptidaos and only return the `id_aptidao`
     * const aptidaoWithId_aptidaoOnly = await prisma.aptidao.updateManyAndReturn({
     *   select: { id_aptidao: true },
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
    updateManyAndReturn<T extends AptidaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AptidaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aptidao.
     * @param {AptidaoUpsertArgs} args - Arguments to update or create a Aptidao.
     * @example
     * // Update or create a Aptidao
     * const aptidao = await prisma.aptidao.upsert({
     *   create: {
     *     // ... data to create a Aptidao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aptidao we want to update
     *   }
     * })
     */
    upsert<T extends AptidaoUpsertArgs>(args: SelectSubset<T, AptidaoUpsertArgs<ExtArgs>>): Prisma__AptidaoClient<$Result.GetResult<Prisma.$AptidaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aptidaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptidaoCountArgs} args - Arguments to filter Aptidaos to count.
     * @example
     * // Count the number of Aptidaos
     * const count = await prisma.aptidao.count({
     *   where: {
     *     // ... the filter for the Aptidaos we want to count
     *   }
     * })
    **/
    count<T extends AptidaoCountArgs>(
      args?: Subset<T, AptidaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AptidaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aptidao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptidaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AptidaoAggregateArgs>(args: Subset<T, AptidaoAggregateArgs>): Prisma.PrismaPromise<GetAptidaoAggregateType<T>>

    /**
     * Group by Aptidao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptidaoGroupByArgs} args - Group by arguments.
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
      T extends AptidaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AptidaoGroupByArgs['orderBy'] }
        : { orderBy?: AptidaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AptidaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAptidaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aptidao model
   */
  readonly fields: AptidaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aptidao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AptidaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Aptidao model
   */
  interface AptidaoFieldRefs {
    readonly id_aptidao: FieldRef<"Aptidao", 'String'>
    readonly id_aluno: FieldRef<"Aptidao", 'String'>
    readonly nome: FieldRef<"Aptidao", 'String'>
    readonly nivel: FieldRef<"Aptidao", 'Int'>
    readonly descricao: FieldRef<"Aptidao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aptidao findUnique
   */
  export type AptidaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * Filter, which Aptidao to fetch.
     */
    where: AptidaoWhereUniqueInput
  }

  /**
   * Aptidao findUniqueOrThrow
   */
  export type AptidaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * Filter, which Aptidao to fetch.
     */
    where: AptidaoWhereUniqueInput
  }

  /**
   * Aptidao findFirst
   */
  export type AptidaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * Filter, which Aptidao to fetch.
     */
    where?: AptidaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aptidaos to fetch.
     */
    orderBy?: AptidaoOrderByWithRelationInput | AptidaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aptidaos.
     */
    cursor?: AptidaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aptidaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aptidaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aptidaos.
     */
    distinct?: AptidaoScalarFieldEnum | AptidaoScalarFieldEnum[]
  }

  /**
   * Aptidao findFirstOrThrow
   */
  export type AptidaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * Filter, which Aptidao to fetch.
     */
    where?: AptidaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aptidaos to fetch.
     */
    orderBy?: AptidaoOrderByWithRelationInput | AptidaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aptidaos.
     */
    cursor?: AptidaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aptidaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aptidaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aptidaos.
     */
    distinct?: AptidaoScalarFieldEnum | AptidaoScalarFieldEnum[]
  }

  /**
   * Aptidao findMany
   */
  export type AptidaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * Filter, which Aptidaos to fetch.
     */
    where?: AptidaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aptidaos to fetch.
     */
    orderBy?: AptidaoOrderByWithRelationInput | AptidaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aptidaos.
     */
    cursor?: AptidaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aptidaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aptidaos.
     */
    skip?: number
    distinct?: AptidaoScalarFieldEnum | AptidaoScalarFieldEnum[]
  }

  /**
   * Aptidao create
   */
  export type AptidaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aptidao.
     */
    data: XOR<AptidaoCreateInput, AptidaoUncheckedCreateInput>
  }

  /**
   * Aptidao createMany
   */
  export type AptidaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aptidaos.
     */
    data: AptidaoCreateManyInput | AptidaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aptidao createManyAndReturn
   */
  export type AptidaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * The data used to create many Aptidaos.
     */
    data: AptidaoCreateManyInput | AptidaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aptidao update
   */
  export type AptidaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aptidao.
     */
    data: XOR<AptidaoUpdateInput, AptidaoUncheckedUpdateInput>
    /**
     * Choose, which Aptidao to update.
     */
    where: AptidaoWhereUniqueInput
  }

  /**
   * Aptidao updateMany
   */
  export type AptidaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aptidaos.
     */
    data: XOR<AptidaoUpdateManyMutationInput, AptidaoUncheckedUpdateManyInput>
    /**
     * Filter which Aptidaos to update
     */
    where?: AptidaoWhereInput
    /**
     * Limit how many Aptidaos to update.
     */
    limit?: number
  }

  /**
   * Aptidao updateManyAndReturn
   */
  export type AptidaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * The data used to update Aptidaos.
     */
    data: XOR<AptidaoUpdateManyMutationInput, AptidaoUncheckedUpdateManyInput>
    /**
     * Filter which Aptidaos to update
     */
    where?: AptidaoWhereInput
    /**
     * Limit how many Aptidaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aptidao upsert
   */
  export type AptidaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aptidao to update in case it exists.
     */
    where: AptidaoWhereUniqueInput
    /**
     * In case the Aptidao found by the `where` argument doesn't exist, create a new Aptidao with this data.
     */
    create: XOR<AptidaoCreateInput, AptidaoUncheckedCreateInput>
    /**
     * In case the Aptidao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AptidaoUpdateInput, AptidaoUncheckedUpdateInput>
  }

  /**
   * Aptidao delete
   */
  export type AptidaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
    /**
     * Filter which Aptidao to delete.
     */
    where: AptidaoWhereUniqueInput
  }

  /**
   * Aptidao deleteMany
   */
  export type AptidaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aptidaos to delete
     */
    where?: AptidaoWhereInput
    /**
     * Limit how many Aptidaos to delete.
     */
    limit?: number
  }

  /**
   * Aptidao without action
   */
  export type AptidaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aptidao
     */
    select?: AptidaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aptidao
     */
    omit?: AptidaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptidaoInclude<ExtArgs> | null
  }


  /**
   * Model SoftSkill
   */

  export type AggregateSoftSkill = {
    _count: SoftSkillCountAggregateOutputType | null
    _avg: SoftSkillAvgAggregateOutputType | null
    _sum: SoftSkillSumAggregateOutputType | null
    _min: SoftSkillMinAggregateOutputType | null
    _max: SoftSkillMaxAggregateOutputType | null
  }

  export type SoftSkillAvgAggregateOutputType = {
    nivel: number | null
  }

  export type SoftSkillSumAggregateOutputType = {
    nivel: number | null
  }

  export type SoftSkillMinAggregateOutputType = {
    id_softskill: string | null
    id_aluno: string | null
    nome: string | null
    nivel: number | null
    descricao: string | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type SoftSkillMaxAggregateOutputType = {
    id_softskill: string | null
    id_aluno: string | null
    nome: string | null
    nivel: number | null
    descricao: string | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type SoftSkillCountAggregateOutputType = {
    id_softskill: number
    id_aluno: number
    nome: number
    nivel: number
    descricao: number
    data_criacao: number
    data_atualizacao: number
    _all: number
  }


  export type SoftSkillAvgAggregateInputType = {
    nivel?: true
  }

  export type SoftSkillSumAggregateInputType = {
    nivel?: true
  }

  export type SoftSkillMinAggregateInputType = {
    id_softskill?: true
    id_aluno?: true
    nome?: true
    nivel?: true
    descricao?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type SoftSkillMaxAggregateInputType = {
    id_softskill?: true
    id_aluno?: true
    nome?: true
    nivel?: true
    descricao?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type SoftSkillCountAggregateInputType = {
    id_softskill?: true
    id_aluno?: true
    nome?: true
    nivel?: true
    descricao?: true
    data_criacao?: true
    data_atualizacao?: true
    _all?: true
  }

  export type SoftSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoftSkill to aggregate.
     */
    where?: SoftSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoftSkills to fetch.
     */
    orderBy?: SoftSkillOrderByWithRelationInput | SoftSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoftSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoftSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoftSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SoftSkills
    **/
    _count?: true | SoftSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoftSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoftSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoftSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoftSkillMaxAggregateInputType
  }

  export type GetSoftSkillAggregateType<T extends SoftSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSoftSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoftSkill[P]>
      : GetScalarType<T[P], AggregateSoftSkill[P]>
  }




  export type SoftSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoftSkillWhereInput
    orderBy?: SoftSkillOrderByWithAggregationInput | SoftSkillOrderByWithAggregationInput[]
    by: SoftSkillScalarFieldEnum[] | SoftSkillScalarFieldEnum
    having?: SoftSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoftSkillCountAggregateInputType | true
    _avg?: SoftSkillAvgAggregateInputType
    _sum?: SoftSkillSumAggregateInputType
    _min?: SoftSkillMinAggregateInputType
    _max?: SoftSkillMaxAggregateInputType
  }

  export type SoftSkillGroupByOutputType = {
    id_softskill: string
    id_aluno: string
    nome: string
    nivel: number
    descricao: string | null
    data_criacao: Date
    data_atualizacao: Date
    _count: SoftSkillCountAggregateOutputType | null
    _avg: SoftSkillAvgAggregateOutputType | null
    _sum: SoftSkillSumAggregateOutputType | null
    _min: SoftSkillMinAggregateOutputType | null
    _max: SoftSkillMaxAggregateOutputType | null
  }

  type GetSoftSkillGroupByPayload<T extends SoftSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoftSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoftSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoftSkillGroupByOutputType[P]>
            : GetScalarType<T[P], SoftSkillGroupByOutputType[P]>
        }
      >
    >


  export type SoftSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_softskill?: boolean
    id_aluno?: boolean
    nome?: boolean
    nivel?: boolean
    descricao?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["softSkill"]>

  export type SoftSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_softskill?: boolean
    id_aluno?: boolean
    nome?: boolean
    nivel?: boolean
    descricao?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["softSkill"]>

  export type SoftSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_softskill?: boolean
    id_aluno?: boolean
    nome?: boolean
    nivel?: boolean
    descricao?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["softSkill"]>

  export type SoftSkillSelectScalar = {
    id_softskill?: boolean
    id_aluno?: boolean
    nome?: boolean
    nivel?: boolean
    descricao?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }

  export type SoftSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_softskill" | "id_aluno" | "nome" | "nivel" | "descricao" | "data_criacao" | "data_atualizacao", ExtArgs["result"]["softSkill"]>
  export type SoftSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type SoftSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type SoftSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $SoftSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SoftSkill"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_softskill: string
      id_aluno: string
      nome: string
      nivel: number
      descricao: string | null
      data_criacao: Date
      data_atualizacao: Date
    }, ExtArgs["result"]["softSkill"]>
    composites: {}
  }

  type SoftSkillGetPayload<S extends boolean | null | undefined | SoftSkillDefaultArgs> = $Result.GetResult<Prisma.$SoftSkillPayload, S>

  type SoftSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoftSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoftSkillCountAggregateInputType | true
    }

  export interface SoftSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SoftSkill'], meta: { name: 'SoftSkill' } }
    /**
     * Find zero or one SoftSkill that matches the filter.
     * @param {SoftSkillFindUniqueArgs} args - Arguments to find a SoftSkill
     * @example
     * // Get one SoftSkill
     * const softSkill = await prisma.softSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoftSkillFindUniqueArgs>(args: SelectSubset<T, SoftSkillFindUniqueArgs<ExtArgs>>): Prisma__SoftSkillClient<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SoftSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoftSkillFindUniqueOrThrowArgs} args - Arguments to find a SoftSkill
     * @example
     * // Get one SoftSkill
     * const softSkill = await prisma.softSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoftSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SoftSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoftSkillClient<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoftSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftSkillFindFirstArgs} args - Arguments to find a SoftSkill
     * @example
     * // Get one SoftSkill
     * const softSkill = await prisma.softSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoftSkillFindFirstArgs>(args?: SelectSubset<T, SoftSkillFindFirstArgs<ExtArgs>>): Prisma__SoftSkillClient<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoftSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftSkillFindFirstOrThrowArgs} args - Arguments to find a SoftSkill
     * @example
     * // Get one SoftSkill
     * const softSkill = await prisma.softSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoftSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SoftSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoftSkillClient<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SoftSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoftSkills
     * const softSkills = await prisma.softSkill.findMany()
     * 
     * // Get first 10 SoftSkills
     * const softSkills = await prisma.softSkill.findMany({ take: 10 })
     * 
     * // Only select the `id_softskill`
     * const softSkillWithId_softskillOnly = await prisma.softSkill.findMany({ select: { id_softskill: true } })
     * 
     */
    findMany<T extends SoftSkillFindManyArgs>(args?: SelectSubset<T, SoftSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SoftSkill.
     * @param {SoftSkillCreateArgs} args - Arguments to create a SoftSkill.
     * @example
     * // Create one SoftSkill
     * const SoftSkill = await prisma.softSkill.create({
     *   data: {
     *     // ... data to create a SoftSkill
     *   }
     * })
     * 
     */
    create<T extends SoftSkillCreateArgs>(args: SelectSubset<T, SoftSkillCreateArgs<ExtArgs>>): Prisma__SoftSkillClient<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SoftSkills.
     * @param {SoftSkillCreateManyArgs} args - Arguments to create many SoftSkills.
     * @example
     * // Create many SoftSkills
     * const softSkill = await prisma.softSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoftSkillCreateManyArgs>(args?: SelectSubset<T, SoftSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SoftSkills and returns the data saved in the database.
     * @param {SoftSkillCreateManyAndReturnArgs} args - Arguments to create many SoftSkills.
     * @example
     * // Create many SoftSkills
     * const softSkill = await prisma.softSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SoftSkills and only return the `id_softskill`
     * const softSkillWithId_softskillOnly = await prisma.softSkill.createManyAndReturn({
     *   select: { id_softskill: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoftSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SoftSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SoftSkill.
     * @param {SoftSkillDeleteArgs} args - Arguments to delete one SoftSkill.
     * @example
     * // Delete one SoftSkill
     * const SoftSkill = await prisma.softSkill.delete({
     *   where: {
     *     // ... filter to delete one SoftSkill
     *   }
     * })
     * 
     */
    delete<T extends SoftSkillDeleteArgs>(args: SelectSubset<T, SoftSkillDeleteArgs<ExtArgs>>): Prisma__SoftSkillClient<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SoftSkill.
     * @param {SoftSkillUpdateArgs} args - Arguments to update one SoftSkill.
     * @example
     * // Update one SoftSkill
     * const softSkill = await prisma.softSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoftSkillUpdateArgs>(args: SelectSubset<T, SoftSkillUpdateArgs<ExtArgs>>): Prisma__SoftSkillClient<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SoftSkills.
     * @param {SoftSkillDeleteManyArgs} args - Arguments to filter SoftSkills to delete.
     * @example
     * // Delete a few SoftSkills
     * const { count } = await prisma.softSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoftSkillDeleteManyArgs>(args?: SelectSubset<T, SoftSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoftSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoftSkills
     * const softSkill = await prisma.softSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoftSkillUpdateManyArgs>(args: SelectSubset<T, SoftSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoftSkills and returns the data updated in the database.
     * @param {SoftSkillUpdateManyAndReturnArgs} args - Arguments to update many SoftSkills.
     * @example
     * // Update many SoftSkills
     * const softSkill = await prisma.softSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SoftSkills and only return the `id_softskill`
     * const softSkillWithId_softskillOnly = await prisma.softSkill.updateManyAndReturn({
     *   select: { id_softskill: true },
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
    updateManyAndReturn<T extends SoftSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SoftSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SoftSkill.
     * @param {SoftSkillUpsertArgs} args - Arguments to update or create a SoftSkill.
     * @example
     * // Update or create a SoftSkill
     * const softSkill = await prisma.softSkill.upsert({
     *   create: {
     *     // ... data to create a SoftSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoftSkill we want to update
     *   }
     * })
     */
    upsert<T extends SoftSkillUpsertArgs>(args: SelectSubset<T, SoftSkillUpsertArgs<ExtArgs>>): Prisma__SoftSkillClient<$Result.GetResult<Prisma.$SoftSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SoftSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftSkillCountArgs} args - Arguments to filter SoftSkills to count.
     * @example
     * // Count the number of SoftSkills
     * const count = await prisma.softSkill.count({
     *   where: {
     *     // ... the filter for the SoftSkills we want to count
     *   }
     * })
    **/
    count<T extends SoftSkillCountArgs>(
      args?: Subset<T, SoftSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoftSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SoftSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SoftSkillAggregateArgs>(args: Subset<T, SoftSkillAggregateArgs>): Prisma.PrismaPromise<GetSoftSkillAggregateType<T>>

    /**
     * Group by SoftSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftSkillGroupByArgs} args - Group by arguments.
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
      T extends SoftSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoftSkillGroupByArgs['orderBy'] }
        : { orderBy?: SoftSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SoftSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoftSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SoftSkill model
   */
  readonly fields: SoftSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SoftSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoftSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SoftSkill model
   */
  interface SoftSkillFieldRefs {
    readonly id_softskill: FieldRef<"SoftSkill", 'String'>
    readonly id_aluno: FieldRef<"SoftSkill", 'String'>
    readonly nome: FieldRef<"SoftSkill", 'String'>
    readonly nivel: FieldRef<"SoftSkill", 'Int'>
    readonly descricao: FieldRef<"SoftSkill", 'String'>
    readonly data_criacao: FieldRef<"SoftSkill", 'DateTime'>
    readonly data_atualizacao: FieldRef<"SoftSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SoftSkill findUnique
   */
  export type SoftSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * Filter, which SoftSkill to fetch.
     */
    where: SoftSkillWhereUniqueInput
  }

  /**
   * SoftSkill findUniqueOrThrow
   */
  export type SoftSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * Filter, which SoftSkill to fetch.
     */
    where: SoftSkillWhereUniqueInput
  }

  /**
   * SoftSkill findFirst
   */
  export type SoftSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * Filter, which SoftSkill to fetch.
     */
    where?: SoftSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoftSkills to fetch.
     */
    orderBy?: SoftSkillOrderByWithRelationInput | SoftSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoftSkills.
     */
    cursor?: SoftSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoftSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoftSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoftSkills.
     */
    distinct?: SoftSkillScalarFieldEnum | SoftSkillScalarFieldEnum[]
  }

  /**
   * SoftSkill findFirstOrThrow
   */
  export type SoftSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * Filter, which SoftSkill to fetch.
     */
    where?: SoftSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoftSkills to fetch.
     */
    orderBy?: SoftSkillOrderByWithRelationInput | SoftSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoftSkills.
     */
    cursor?: SoftSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoftSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoftSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoftSkills.
     */
    distinct?: SoftSkillScalarFieldEnum | SoftSkillScalarFieldEnum[]
  }

  /**
   * SoftSkill findMany
   */
  export type SoftSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * Filter, which SoftSkills to fetch.
     */
    where?: SoftSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoftSkills to fetch.
     */
    orderBy?: SoftSkillOrderByWithRelationInput | SoftSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SoftSkills.
     */
    cursor?: SoftSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoftSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoftSkills.
     */
    skip?: number
    distinct?: SoftSkillScalarFieldEnum | SoftSkillScalarFieldEnum[]
  }

  /**
   * SoftSkill create
   */
  export type SoftSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a SoftSkill.
     */
    data: XOR<SoftSkillCreateInput, SoftSkillUncheckedCreateInput>
  }

  /**
   * SoftSkill createMany
   */
  export type SoftSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SoftSkills.
     */
    data: SoftSkillCreateManyInput | SoftSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SoftSkill createManyAndReturn
   */
  export type SoftSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * The data used to create many SoftSkills.
     */
    data: SoftSkillCreateManyInput | SoftSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SoftSkill update
   */
  export type SoftSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a SoftSkill.
     */
    data: XOR<SoftSkillUpdateInput, SoftSkillUncheckedUpdateInput>
    /**
     * Choose, which SoftSkill to update.
     */
    where: SoftSkillWhereUniqueInput
  }

  /**
   * SoftSkill updateMany
   */
  export type SoftSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SoftSkills.
     */
    data: XOR<SoftSkillUpdateManyMutationInput, SoftSkillUncheckedUpdateManyInput>
    /**
     * Filter which SoftSkills to update
     */
    where?: SoftSkillWhereInput
    /**
     * Limit how many SoftSkills to update.
     */
    limit?: number
  }

  /**
   * SoftSkill updateManyAndReturn
   */
  export type SoftSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * The data used to update SoftSkills.
     */
    data: XOR<SoftSkillUpdateManyMutationInput, SoftSkillUncheckedUpdateManyInput>
    /**
     * Filter which SoftSkills to update
     */
    where?: SoftSkillWhereInput
    /**
     * Limit how many SoftSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SoftSkill upsert
   */
  export type SoftSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the SoftSkill to update in case it exists.
     */
    where: SoftSkillWhereUniqueInput
    /**
     * In case the SoftSkill found by the `where` argument doesn't exist, create a new SoftSkill with this data.
     */
    create: XOR<SoftSkillCreateInput, SoftSkillUncheckedCreateInput>
    /**
     * In case the SoftSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoftSkillUpdateInput, SoftSkillUncheckedUpdateInput>
  }

  /**
   * SoftSkill delete
   */
  export type SoftSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
    /**
     * Filter which SoftSkill to delete.
     */
    where: SoftSkillWhereUniqueInput
  }

  /**
   * SoftSkill deleteMany
   */
  export type SoftSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoftSkills to delete
     */
    where?: SoftSkillWhereInput
    /**
     * Limit how many SoftSkills to delete.
     */
    limit?: number
  }

  /**
   * SoftSkill without action
   */
  export type SoftSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftSkill
     */
    select?: SoftSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoftSkill
     */
    omit?: SoftSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftSkillInclude<ExtArgs> | null
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


  export const RecrutadorScalarFieldEnum: {
    id_recrutador: 'id_recrutador',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    cargo: 'cargo',
    telefone: 'telefone',
    id_empresa: 'id_empresa',
    data_criacao: 'data_criacao',
    data_atualizacao: 'data_atualizacao'
  };

  export type RecrutadorScalarFieldEnum = (typeof RecrutadorScalarFieldEnum)[keyof typeof RecrutadorScalarFieldEnum]


  export const EmpresaScalarFieldEnum: {
    id_empresa: 'id_empresa',
    nome: 'nome',
    cnpj: 'cnpj',
    endereco: 'endereco',
    setor: 'setor',
    descricao: 'descricao',
    website: 'website',
    data_criacao: 'data_criacao',
    data_atualizacao: 'data_atualizacao'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const AlunoScalarFieldEnum: {
    id_aluno: 'id_aluno',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    matricula: 'matricula',
    curso: 'curso',
    semestre_atual: 'semestre_atual',
    cpf: 'cpf',
    telefone: 'telefone',
    data_nascimento: 'data_nascimento',
    endereco: 'endereco',
    linkedin: 'linkedin',
    github: 'github',
    portfolio: 'portfolio',
    solicitacoes: 'solicitacoes',
    data_criacao: 'data_criacao',
    data_atualizacao: 'data_atualizacao'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const ContratacaoScalarFieldEnum: {
    id_contratacao: 'id_contratacao',
    id_recrutador: 'id_recrutador',
    id_aluno: 'id_aluno',
    data_contratacao: 'data_contratacao',
    cargo: 'cargo',
    salario: 'salario',
    status: 'status'
  };

  export type ContratacaoScalarFieldEnum = (typeof ContratacaoScalarFieldEnum)[keyof typeof ContratacaoScalarFieldEnum]


  export const NotaScalarFieldEnum: {
    id_nota: 'id_nota',
    id_aluno: 'id_aluno',
    disciplina: 'disciplina',
    nota: 'nota',
    semestre: 'semestre'
  };

  export type NotaScalarFieldEnum = (typeof NotaScalarFieldEnum)[keyof typeof NotaScalarFieldEnum]


  export const AptidaoScalarFieldEnum: {
    id_aptidao: 'id_aptidao',
    id_aluno: 'id_aluno',
    nome: 'nome',
    nivel: 'nivel',
    descricao: 'descricao'
  };

  export type AptidaoScalarFieldEnum = (typeof AptidaoScalarFieldEnum)[keyof typeof AptidaoScalarFieldEnum]


  export const SoftSkillScalarFieldEnum: {
    id_softskill: 'id_softskill',
    id_aluno: 'id_aluno',
    nome: 'nome',
    nivel: 'nivel',
    descricao: 'descricao',
    data_criacao: 'data_criacao',
    data_atualizacao: 'data_atualizacao'
  };

  export type SoftSkillScalarFieldEnum = (typeof SoftSkillScalarFieldEnum)[keyof typeof SoftSkillScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RecrutadorWhereInput = {
    AND?: RecrutadorWhereInput | RecrutadorWhereInput[]
    OR?: RecrutadorWhereInput[]
    NOT?: RecrutadorWhereInput | RecrutadorWhereInput[]
    id_recrutador?: StringFilter<"Recrutador"> | string
    nome?: StringFilter<"Recrutador"> | string
    email?: StringFilter<"Recrutador"> | string
    senha?: StringFilter<"Recrutador"> | string
    cargo?: StringFilter<"Recrutador"> | string
    telefone?: StringFilter<"Recrutador"> | string
    id_empresa?: StringFilter<"Recrutador"> | string
    data_criacao?: DateTimeFilter<"Recrutador"> | Date | string
    data_atualizacao?: DateTimeFilter<"Recrutador"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    contratacoes?: ContratacaoListRelationFilter
  }

  export type RecrutadorOrderByWithRelationInput = {
    id_recrutador?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
    id_empresa?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    contratacoes?: ContratacaoOrderByRelationAggregateInput
  }

  export type RecrutadorWhereUniqueInput = Prisma.AtLeast<{
    id_recrutador?: string
    email?: string
    AND?: RecrutadorWhereInput | RecrutadorWhereInput[]
    OR?: RecrutadorWhereInput[]
    NOT?: RecrutadorWhereInput | RecrutadorWhereInput[]
    nome?: StringFilter<"Recrutador"> | string
    senha?: StringFilter<"Recrutador"> | string
    cargo?: StringFilter<"Recrutador"> | string
    telefone?: StringFilter<"Recrutador"> | string
    id_empresa?: StringFilter<"Recrutador"> | string
    data_criacao?: DateTimeFilter<"Recrutador"> | Date | string
    data_atualizacao?: DateTimeFilter<"Recrutador"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    contratacoes?: ContratacaoListRelationFilter
  }, "id_recrutador" | "email">

  export type RecrutadorOrderByWithAggregationInput = {
    id_recrutador?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
    id_empresa?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    _count?: RecrutadorCountOrderByAggregateInput
    _max?: RecrutadorMaxOrderByAggregateInput
    _min?: RecrutadorMinOrderByAggregateInput
  }

  export type RecrutadorScalarWhereWithAggregatesInput = {
    AND?: RecrutadorScalarWhereWithAggregatesInput | RecrutadorScalarWhereWithAggregatesInput[]
    OR?: RecrutadorScalarWhereWithAggregatesInput[]
    NOT?: RecrutadorScalarWhereWithAggregatesInput | RecrutadorScalarWhereWithAggregatesInput[]
    id_recrutador?: StringWithAggregatesFilter<"Recrutador"> | string
    nome?: StringWithAggregatesFilter<"Recrutador"> | string
    email?: StringWithAggregatesFilter<"Recrutador"> | string
    senha?: StringWithAggregatesFilter<"Recrutador"> | string
    cargo?: StringWithAggregatesFilter<"Recrutador"> | string
    telefone?: StringWithAggregatesFilter<"Recrutador"> | string
    id_empresa?: StringWithAggregatesFilter<"Recrutador"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"Recrutador"> | Date | string
    data_atualizacao?: DateTimeWithAggregatesFilter<"Recrutador"> | Date | string
  }

  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id_empresa?: StringFilter<"Empresa"> | string
    nome?: StringFilter<"Empresa"> | string
    cnpj?: StringFilter<"Empresa"> | string
    endereco?: StringFilter<"Empresa"> | string
    setor?: StringFilter<"Empresa"> | string
    descricao?: StringNullableFilter<"Empresa"> | string | null
    website?: StringNullableFilter<"Empresa"> | string | null
    data_criacao?: DateTimeFilter<"Empresa"> | Date | string
    data_atualizacao?: DateTimeFilter<"Empresa"> | Date | string
    recrutadores?: RecrutadorListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id_empresa?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    setor?: SortOrder
    descricao?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    recrutadores?: RecrutadorOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id_empresa?: string
    cnpj?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nome?: StringFilter<"Empresa"> | string
    endereco?: StringFilter<"Empresa"> | string
    setor?: StringFilter<"Empresa"> | string
    descricao?: StringNullableFilter<"Empresa"> | string | null
    website?: StringNullableFilter<"Empresa"> | string | null
    data_criacao?: DateTimeFilter<"Empresa"> | Date | string
    data_atualizacao?: DateTimeFilter<"Empresa"> | Date | string
    recrutadores?: RecrutadorListRelationFilter
  }, "id_empresa" | "cnpj">

  export type EmpresaOrderByWithAggregationInput = {
    id_empresa?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    setor?: SortOrder
    descricao?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id_empresa?: StringWithAggregatesFilter<"Empresa"> | string
    nome?: StringWithAggregatesFilter<"Empresa"> | string
    cnpj?: StringWithAggregatesFilter<"Empresa"> | string
    endereco?: StringWithAggregatesFilter<"Empresa"> | string
    setor?: StringWithAggregatesFilter<"Empresa"> | string
    descricao?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    website?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    data_criacao?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
    data_atualizacao?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id_aluno?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    email?: StringFilter<"Aluno"> | string
    senha?: StringFilter<"Aluno"> | string
    matricula?: StringFilter<"Aluno"> | string
    curso?: StringFilter<"Aluno"> | string
    semestre_atual?: IntFilter<"Aluno"> | number
    cpf?: StringFilter<"Aluno"> | string
    telefone?: StringFilter<"Aluno"> | string
    data_nascimento?: DateTimeFilter<"Aluno"> | Date | string
    endereco?: StringFilter<"Aluno"> | string
    linkedin?: StringNullableFilter<"Aluno"> | string | null
    github?: StringNullableFilter<"Aluno"> | string | null
    portfolio?: StringNullableFilter<"Aluno"> | string | null
    solicitacoes?: IntFilter<"Aluno"> | number
    data_criacao?: DateTimeFilter<"Aluno"> | Date | string
    data_atualizacao?: DateTimeFilter<"Aluno"> | Date | string
    contratacoes?: ContratacaoListRelationFilter
    notas?: NotaListRelationFilter
    aptidoes?: AptidaoListRelationFilter
    softskills?: SoftSkillListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    id_aluno?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    curso?: SortOrder
    semestre_atual?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    solicitacoes?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    contratacoes?: ContratacaoOrderByRelationAggregateInput
    notas?: NotaOrderByRelationAggregateInput
    aptidoes?: AptidaoOrderByRelationAggregateInput
    softskills?: SoftSkillOrderByRelationAggregateInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id_aluno?: string
    email?: string
    matricula?: string
    cpf?: string
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    nome?: StringFilter<"Aluno"> | string
    senha?: StringFilter<"Aluno"> | string
    curso?: StringFilter<"Aluno"> | string
    semestre_atual?: IntFilter<"Aluno"> | number
    telefone?: StringFilter<"Aluno"> | string
    data_nascimento?: DateTimeFilter<"Aluno"> | Date | string
    endereco?: StringFilter<"Aluno"> | string
    linkedin?: StringNullableFilter<"Aluno"> | string | null
    github?: StringNullableFilter<"Aluno"> | string | null
    portfolio?: StringNullableFilter<"Aluno"> | string | null
    solicitacoes?: IntFilter<"Aluno"> | number
    data_criacao?: DateTimeFilter<"Aluno"> | Date | string
    data_atualizacao?: DateTimeFilter<"Aluno"> | Date | string
    contratacoes?: ContratacaoListRelationFilter
    notas?: NotaListRelationFilter
    aptidoes?: AptidaoListRelationFilter
    softskills?: SoftSkillListRelationFilter
  }, "id_aluno" | "email" | "matricula" | "cpf">

  export type AlunoOrderByWithAggregationInput = {
    id_aluno?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    curso?: SortOrder
    semestre_atual?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    solicitacoes?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _avg?: AlunoAvgOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
    _sum?: AlunoSumOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id_aluno?: StringWithAggregatesFilter<"Aluno"> | string
    nome?: StringWithAggregatesFilter<"Aluno"> | string
    email?: StringWithAggregatesFilter<"Aluno"> | string
    senha?: StringWithAggregatesFilter<"Aluno"> | string
    matricula?: StringWithAggregatesFilter<"Aluno"> | string
    curso?: StringWithAggregatesFilter<"Aluno"> | string
    semestre_atual?: IntWithAggregatesFilter<"Aluno"> | number
    cpf?: StringWithAggregatesFilter<"Aluno"> | string
    telefone?: StringWithAggregatesFilter<"Aluno"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
    endereco?: StringWithAggregatesFilter<"Aluno"> | string
    linkedin?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    github?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    portfolio?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    solicitacoes?: IntWithAggregatesFilter<"Aluno"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
    data_atualizacao?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
  }

  export type ContratacaoWhereInput = {
    AND?: ContratacaoWhereInput | ContratacaoWhereInput[]
    OR?: ContratacaoWhereInput[]
    NOT?: ContratacaoWhereInput | ContratacaoWhereInput[]
    id_contratacao?: StringFilter<"Contratacao"> | string
    id_recrutador?: StringFilter<"Contratacao"> | string
    id_aluno?: StringFilter<"Contratacao"> | string
    data_contratacao?: DateTimeFilter<"Contratacao"> | Date | string
    cargo?: StringFilter<"Contratacao"> | string
    salario?: FloatNullableFilter<"Contratacao"> | number | null
    status?: StringFilter<"Contratacao"> | string
    recrutador?: XOR<RecrutadorScalarRelationFilter, RecrutadorWhereInput>
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type ContratacaoOrderByWithRelationInput = {
    id_contratacao?: SortOrder
    id_recrutador?: SortOrder
    id_aluno?: SortOrder
    data_contratacao?: SortOrder
    cargo?: SortOrder
    salario?: SortOrderInput | SortOrder
    status?: SortOrder
    recrutador?: RecrutadorOrderByWithRelationInput
    aluno?: AlunoOrderByWithRelationInput
  }

  export type ContratacaoWhereUniqueInput = Prisma.AtLeast<{
    id_contratacao?: string
    AND?: ContratacaoWhereInput | ContratacaoWhereInput[]
    OR?: ContratacaoWhereInput[]
    NOT?: ContratacaoWhereInput | ContratacaoWhereInput[]
    id_recrutador?: StringFilter<"Contratacao"> | string
    id_aluno?: StringFilter<"Contratacao"> | string
    data_contratacao?: DateTimeFilter<"Contratacao"> | Date | string
    cargo?: StringFilter<"Contratacao"> | string
    salario?: FloatNullableFilter<"Contratacao"> | number | null
    status?: StringFilter<"Contratacao"> | string
    recrutador?: XOR<RecrutadorScalarRelationFilter, RecrutadorWhereInput>
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id_contratacao">

  export type ContratacaoOrderByWithAggregationInput = {
    id_contratacao?: SortOrder
    id_recrutador?: SortOrder
    id_aluno?: SortOrder
    data_contratacao?: SortOrder
    cargo?: SortOrder
    salario?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ContratacaoCountOrderByAggregateInput
    _avg?: ContratacaoAvgOrderByAggregateInput
    _max?: ContratacaoMaxOrderByAggregateInput
    _min?: ContratacaoMinOrderByAggregateInput
    _sum?: ContratacaoSumOrderByAggregateInput
  }

  export type ContratacaoScalarWhereWithAggregatesInput = {
    AND?: ContratacaoScalarWhereWithAggregatesInput | ContratacaoScalarWhereWithAggregatesInput[]
    OR?: ContratacaoScalarWhereWithAggregatesInput[]
    NOT?: ContratacaoScalarWhereWithAggregatesInput | ContratacaoScalarWhereWithAggregatesInput[]
    id_contratacao?: StringWithAggregatesFilter<"Contratacao"> | string
    id_recrutador?: StringWithAggregatesFilter<"Contratacao"> | string
    id_aluno?: StringWithAggregatesFilter<"Contratacao"> | string
    data_contratacao?: DateTimeWithAggregatesFilter<"Contratacao"> | Date | string
    cargo?: StringWithAggregatesFilter<"Contratacao"> | string
    salario?: FloatNullableWithAggregatesFilter<"Contratacao"> | number | null
    status?: StringWithAggregatesFilter<"Contratacao"> | string
  }

  export type NotaWhereInput = {
    AND?: NotaWhereInput | NotaWhereInput[]
    OR?: NotaWhereInput[]
    NOT?: NotaWhereInput | NotaWhereInput[]
    id_nota?: StringFilter<"Nota"> | string
    id_aluno?: StringFilter<"Nota"> | string
    disciplina?: StringFilter<"Nota"> | string
    nota?: FloatFilter<"Nota"> | number
    semestre?: IntFilter<"Nota"> | number
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type NotaOrderByWithRelationInput = {
    id_nota?: SortOrder
    id_aluno?: SortOrder
    disciplina?: SortOrder
    nota?: SortOrder
    semestre?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
  }

  export type NotaWhereUniqueInput = Prisma.AtLeast<{
    id_nota?: string
    AND?: NotaWhereInput | NotaWhereInput[]
    OR?: NotaWhereInput[]
    NOT?: NotaWhereInput | NotaWhereInput[]
    id_aluno?: StringFilter<"Nota"> | string
    disciplina?: StringFilter<"Nota"> | string
    nota?: FloatFilter<"Nota"> | number
    semestre?: IntFilter<"Nota"> | number
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id_nota">

  export type NotaOrderByWithAggregationInput = {
    id_nota?: SortOrder
    id_aluno?: SortOrder
    disciplina?: SortOrder
    nota?: SortOrder
    semestre?: SortOrder
    _count?: NotaCountOrderByAggregateInput
    _avg?: NotaAvgOrderByAggregateInput
    _max?: NotaMaxOrderByAggregateInput
    _min?: NotaMinOrderByAggregateInput
    _sum?: NotaSumOrderByAggregateInput
  }

  export type NotaScalarWhereWithAggregatesInput = {
    AND?: NotaScalarWhereWithAggregatesInput | NotaScalarWhereWithAggregatesInput[]
    OR?: NotaScalarWhereWithAggregatesInput[]
    NOT?: NotaScalarWhereWithAggregatesInput | NotaScalarWhereWithAggregatesInput[]
    id_nota?: StringWithAggregatesFilter<"Nota"> | string
    id_aluno?: StringWithAggregatesFilter<"Nota"> | string
    disciplina?: StringWithAggregatesFilter<"Nota"> | string
    nota?: FloatWithAggregatesFilter<"Nota"> | number
    semestre?: IntWithAggregatesFilter<"Nota"> | number
  }

  export type AptidaoWhereInput = {
    AND?: AptidaoWhereInput | AptidaoWhereInput[]
    OR?: AptidaoWhereInput[]
    NOT?: AptidaoWhereInput | AptidaoWhereInput[]
    id_aptidao?: StringFilter<"Aptidao"> | string
    id_aluno?: StringFilter<"Aptidao"> | string
    nome?: StringFilter<"Aptidao"> | string
    nivel?: IntFilter<"Aptidao"> | number
    descricao?: StringNullableFilter<"Aptidao"> | string | null
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type AptidaoOrderByWithRelationInput = {
    id_aptidao?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrderInput | SortOrder
    aluno?: AlunoOrderByWithRelationInput
  }

  export type AptidaoWhereUniqueInput = Prisma.AtLeast<{
    id_aptidao?: string
    AND?: AptidaoWhereInput | AptidaoWhereInput[]
    OR?: AptidaoWhereInput[]
    NOT?: AptidaoWhereInput | AptidaoWhereInput[]
    id_aluno?: StringFilter<"Aptidao"> | string
    nome?: StringFilter<"Aptidao"> | string
    nivel?: IntFilter<"Aptidao"> | number
    descricao?: StringNullableFilter<"Aptidao"> | string | null
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id_aptidao">

  export type AptidaoOrderByWithAggregationInput = {
    id_aptidao?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: AptidaoCountOrderByAggregateInput
    _avg?: AptidaoAvgOrderByAggregateInput
    _max?: AptidaoMaxOrderByAggregateInput
    _min?: AptidaoMinOrderByAggregateInput
    _sum?: AptidaoSumOrderByAggregateInput
  }

  export type AptidaoScalarWhereWithAggregatesInput = {
    AND?: AptidaoScalarWhereWithAggregatesInput | AptidaoScalarWhereWithAggregatesInput[]
    OR?: AptidaoScalarWhereWithAggregatesInput[]
    NOT?: AptidaoScalarWhereWithAggregatesInput | AptidaoScalarWhereWithAggregatesInput[]
    id_aptidao?: StringWithAggregatesFilter<"Aptidao"> | string
    id_aluno?: StringWithAggregatesFilter<"Aptidao"> | string
    nome?: StringWithAggregatesFilter<"Aptidao"> | string
    nivel?: IntWithAggregatesFilter<"Aptidao"> | number
    descricao?: StringNullableWithAggregatesFilter<"Aptidao"> | string | null
  }

  export type SoftSkillWhereInput = {
    AND?: SoftSkillWhereInput | SoftSkillWhereInput[]
    OR?: SoftSkillWhereInput[]
    NOT?: SoftSkillWhereInput | SoftSkillWhereInput[]
    id_softskill?: StringFilter<"SoftSkill"> | string
    id_aluno?: StringFilter<"SoftSkill"> | string
    nome?: StringFilter<"SoftSkill"> | string
    nivel?: IntFilter<"SoftSkill"> | number
    descricao?: StringNullableFilter<"SoftSkill"> | string | null
    data_criacao?: DateTimeFilter<"SoftSkill"> | Date | string
    data_atualizacao?: DateTimeFilter<"SoftSkill"> | Date | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type SoftSkillOrderByWithRelationInput = {
    id_softskill?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
  }

  export type SoftSkillWhereUniqueInput = Prisma.AtLeast<{
    id_softskill?: string
    AND?: SoftSkillWhereInput | SoftSkillWhereInput[]
    OR?: SoftSkillWhereInput[]
    NOT?: SoftSkillWhereInput | SoftSkillWhereInput[]
    id_aluno?: StringFilter<"SoftSkill"> | string
    nome?: StringFilter<"SoftSkill"> | string
    nivel?: IntFilter<"SoftSkill"> | number
    descricao?: StringNullableFilter<"SoftSkill"> | string | null
    data_criacao?: DateTimeFilter<"SoftSkill"> | Date | string
    data_atualizacao?: DateTimeFilter<"SoftSkill"> | Date | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id_softskill">

  export type SoftSkillOrderByWithAggregationInput = {
    id_softskill?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    _count?: SoftSkillCountOrderByAggregateInput
    _avg?: SoftSkillAvgOrderByAggregateInput
    _max?: SoftSkillMaxOrderByAggregateInput
    _min?: SoftSkillMinOrderByAggregateInput
    _sum?: SoftSkillSumOrderByAggregateInput
  }

  export type SoftSkillScalarWhereWithAggregatesInput = {
    AND?: SoftSkillScalarWhereWithAggregatesInput | SoftSkillScalarWhereWithAggregatesInput[]
    OR?: SoftSkillScalarWhereWithAggregatesInput[]
    NOT?: SoftSkillScalarWhereWithAggregatesInput | SoftSkillScalarWhereWithAggregatesInput[]
    id_softskill?: StringWithAggregatesFilter<"SoftSkill"> | string
    id_aluno?: StringWithAggregatesFilter<"SoftSkill"> | string
    nome?: StringWithAggregatesFilter<"SoftSkill"> | string
    nivel?: IntWithAggregatesFilter<"SoftSkill"> | number
    descricao?: StringNullableWithAggregatesFilter<"SoftSkill"> | string | null
    data_criacao?: DateTimeWithAggregatesFilter<"SoftSkill"> | Date | string
    data_atualizacao?: DateTimeWithAggregatesFilter<"SoftSkill"> | Date | string
  }

  export type RecrutadorCreateInput = {
    id_recrutador?: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    empresa: EmpresaCreateNestedOneWithoutRecrutadoresInput
    contratacoes?: ContratacaoCreateNestedManyWithoutRecrutadorInput
  }

  export type RecrutadorUncheckedCreateInput = {
    id_recrutador?: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    id_empresa: string
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoUncheckedCreateNestedManyWithoutRecrutadorInput
  }

  export type RecrutadorUpdateInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutRecrutadoresNestedInput
    contratacoes?: ContratacaoUpdateManyWithoutRecrutadorNestedInput
  }

  export type RecrutadorUncheckedUpdateInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUncheckedUpdateManyWithoutRecrutadorNestedInput
  }

  export type RecrutadorCreateManyInput = {
    id_recrutador?: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    id_empresa: string
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type RecrutadorUpdateManyMutationInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecrutadorUncheckedUpdateManyInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaCreateInput = {
    id_empresa?: string
    nome: string
    cnpj: string
    endereco: string
    setor: string
    descricao?: string | null
    website?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    recrutadores?: RecrutadorCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id_empresa?: string
    nome: string
    cnpj: string
    endereco: string
    setor: string
    descricao?: string | null
    website?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    recrutadores?: RecrutadorUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    id_empresa?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    recrutadores?: RecrutadorUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id_empresa?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    recrutadores?: RecrutadorUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id_empresa?: string
    nome: string
    cnpj: string
    endereco: string
    setor: string
    descricao?: string | null
    website?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    id_empresa?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id_empresa?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoCreateInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoCreateNestedManyWithoutAlunoInput
    notas?: NotaCreateNestedManyWithoutAlunoInput
    aptidoes?: AptidaoCreateNestedManyWithoutAlunoInput
    softskills?: SoftSkillCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoUncheckedCreateNestedManyWithoutAlunoInput
    notas?: NotaUncheckedCreateNestedManyWithoutAlunoInput
    aptidoes?: AptidaoUncheckedCreateNestedManyWithoutAlunoInput
    softskills?: SoftSkillUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUpdateManyWithoutAlunoNestedInput
    notas?: NotaUpdateManyWithoutAlunoNestedInput
    aptidoes?: AptidaoUpdateManyWithoutAlunoNestedInput
    softskills?: SoftSkillUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUncheckedUpdateManyWithoutAlunoNestedInput
    notas?: NotaUncheckedUpdateManyWithoutAlunoNestedInput
    aptidoes?: AptidaoUncheckedUpdateManyWithoutAlunoNestedInput
    softskills?: SoftSkillUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type AlunoUpdateManyMutationInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratacaoCreateInput = {
    id_contratacao?: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
    recrutador: RecrutadorCreateNestedOneWithoutContratacoesInput
    aluno: AlunoCreateNestedOneWithoutContratacoesInput
  }

  export type ContratacaoUncheckedCreateInput = {
    id_contratacao?: string
    id_recrutador: string
    id_aluno: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
  }

  export type ContratacaoUpdateInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    recrutador?: RecrutadorUpdateOneRequiredWithoutContratacoesNestedInput
    aluno?: AlunoUpdateOneRequiredWithoutContratacoesNestedInput
  }

  export type ContratacaoUncheckedUpdateInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    id_recrutador?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContratacaoCreateManyInput = {
    id_contratacao?: string
    id_recrutador: string
    id_aluno: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
  }

  export type ContratacaoUpdateManyMutationInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContratacaoUncheckedUpdateManyInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    id_recrutador?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NotaCreateInput = {
    id_nota?: string
    disciplina: string
    nota: number
    semestre: number
    aluno: AlunoCreateNestedOneWithoutNotasInput
  }

  export type NotaUncheckedCreateInput = {
    id_nota?: string
    id_aluno: string
    disciplina: string
    nota: number
    semestre: number
  }

  export type NotaUpdateInput = {
    id_nota?: StringFieldUpdateOperationsInput | string
    disciplina?: StringFieldUpdateOperationsInput | string
    nota?: FloatFieldUpdateOperationsInput | number
    semestre?: IntFieldUpdateOperationsInput | number
    aluno?: AlunoUpdateOneRequiredWithoutNotasNestedInput
  }

  export type NotaUncheckedUpdateInput = {
    id_nota?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    disciplina?: StringFieldUpdateOperationsInput | string
    nota?: FloatFieldUpdateOperationsInput | number
    semestre?: IntFieldUpdateOperationsInput | number
  }

  export type NotaCreateManyInput = {
    id_nota?: string
    id_aluno: string
    disciplina: string
    nota: number
    semestre: number
  }

  export type NotaUpdateManyMutationInput = {
    id_nota?: StringFieldUpdateOperationsInput | string
    disciplina?: StringFieldUpdateOperationsInput | string
    nota?: FloatFieldUpdateOperationsInput | number
    semestre?: IntFieldUpdateOperationsInput | number
  }

  export type NotaUncheckedUpdateManyInput = {
    id_nota?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    disciplina?: StringFieldUpdateOperationsInput | string
    nota?: FloatFieldUpdateOperationsInput | number
    semestre?: IntFieldUpdateOperationsInput | number
  }

  export type AptidaoCreateInput = {
    id_aptidao?: string
    nome: string
    nivel: number
    descricao?: string | null
    aluno: AlunoCreateNestedOneWithoutAptidoesInput
  }

  export type AptidaoUncheckedCreateInput = {
    id_aptidao?: string
    id_aluno: string
    nome: string
    nivel: number
    descricao?: string | null
  }

  export type AptidaoUpdateInput = {
    id_aptidao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    aluno?: AlunoUpdateOneRequiredWithoutAptidoesNestedInput
  }

  export type AptidaoUncheckedUpdateInput = {
    id_aptidao?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AptidaoCreateManyInput = {
    id_aptidao?: string
    id_aluno: string
    nome: string
    nivel: number
    descricao?: string | null
  }

  export type AptidaoUpdateManyMutationInput = {
    id_aptidao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AptidaoUncheckedUpdateManyInput = {
    id_aptidao?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SoftSkillCreateInput = {
    id_softskill?: string
    nome: string
    nivel: number
    descricao?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    aluno: AlunoCreateNestedOneWithoutSoftskillsInput
  }

  export type SoftSkillUncheckedCreateInput = {
    id_softskill?: string
    id_aluno: string
    nome: string
    nivel: number
    descricao?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type SoftSkillUpdateInput = {
    id_softskill?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneRequiredWithoutSoftskillsNestedInput
  }

  export type SoftSkillUncheckedUpdateInput = {
    id_softskill?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftSkillCreateManyInput = {
    id_softskill?: string
    id_aluno: string
    nome: string
    nivel: number
    descricao?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type SoftSkillUpdateManyMutationInput = {
    id_softskill?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftSkillUncheckedUpdateManyInput = {
    id_softskill?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type ContratacaoListRelationFilter = {
    every?: ContratacaoWhereInput
    some?: ContratacaoWhereInput
    none?: ContratacaoWhereInput
  }

  export type ContratacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecrutadorCountOrderByAggregateInput = {
    id_recrutador?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
    id_empresa?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type RecrutadorMaxOrderByAggregateInput = {
    id_recrutador?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
    id_empresa?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type RecrutadorMinOrderByAggregateInput = {
    id_recrutador?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrder
    telefone?: SortOrder
    id_empresa?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
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

  export type RecrutadorListRelationFilter = {
    every?: RecrutadorWhereInput
    some?: RecrutadorWhereInput
    none?: RecrutadorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecrutadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id_empresa?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    setor?: SortOrder
    descricao?: SortOrder
    website?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id_empresa?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    setor?: SortOrder
    descricao?: SortOrder
    website?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id_empresa?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    setor?: SortOrder
    descricao?: SortOrder
    website?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NotaListRelationFilter = {
    every?: NotaWhereInput
    some?: NotaWhereInput
    none?: NotaWhereInput
  }

  export type AptidaoListRelationFilter = {
    every?: AptidaoWhereInput
    some?: AptidaoWhereInput
    none?: AptidaoWhereInput
  }

  export type SoftSkillListRelationFilter = {
    every?: SoftSkillWhereInput
    some?: SoftSkillWhereInput
    none?: SoftSkillWhereInput
  }

  export type NotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AptidaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SoftSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoCountOrderByAggregateInput = {
    id_aluno?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    curso?: SortOrder
    semestre_atual?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    solicitacoes?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type AlunoAvgOrderByAggregateInput = {
    semestre_atual?: SortOrder
    solicitacoes?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id_aluno?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    curso?: SortOrder
    semestre_atual?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    solicitacoes?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id_aluno?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    curso?: SortOrder
    semestre_atual?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    solicitacoes?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type AlunoSumOrderByAggregateInput = {
    semestre_atual?: SortOrder
    solicitacoes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RecrutadorScalarRelationFilter = {
    is?: RecrutadorWhereInput
    isNot?: RecrutadorWhereInput
  }

  export type AlunoScalarRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type ContratacaoCountOrderByAggregateInput = {
    id_contratacao?: SortOrder
    id_recrutador?: SortOrder
    id_aluno?: SortOrder
    data_contratacao?: SortOrder
    cargo?: SortOrder
    salario?: SortOrder
    status?: SortOrder
  }

  export type ContratacaoAvgOrderByAggregateInput = {
    salario?: SortOrder
  }

  export type ContratacaoMaxOrderByAggregateInput = {
    id_contratacao?: SortOrder
    id_recrutador?: SortOrder
    id_aluno?: SortOrder
    data_contratacao?: SortOrder
    cargo?: SortOrder
    salario?: SortOrder
    status?: SortOrder
  }

  export type ContratacaoMinOrderByAggregateInput = {
    id_contratacao?: SortOrder
    id_recrutador?: SortOrder
    id_aluno?: SortOrder
    data_contratacao?: SortOrder
    cargo?: SortOrder
    salario?: SortOrder
    status?: SortOrder
  }

  export type ContratacaoSumOrderByAggregateInput = {
    salario?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NotaCountOrderByAggregateInput = {
    id_nota?: SortOrder
    id_aluno?: SortOrder
    disciplina?: SortOrder
    nota?: SortOrder
    semestre?: SortOrder
  }

  export type NotaAvgOrderByAggregateInput = {
    nota?: SortOrder
    semestre?: SortOrder
  }

  export type NotaMaxOrderByAggregateInput = {
    id_nota?: SortOrder
    id_aluno?: SortOrder
    disciplina?: SortOrder
    nota?: SortOrder
    semestre?: SortOrder
  }

  export type NotaMinOrderByAggregateInput = {
    id_nota?: SortOrder
    id_aluno?: SortOrder
    disciplina?: SortOrder
    nota?: SortOrder
    semestre?: SortOrder
  }

  export type NotaSumOrderByAggregateInput = {
    nota?: SortOrder
    semestre?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AptidaoCountOrderByAggregateInput = {
    id_aptidao?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrder
  }

  export type AptidaoAvgOrderByAggregateInput = {
    nivel?: SortOrder
  }

  export type AptidaoMaxOrderByAggregateInput = {
    id_aptidao?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrder
  }

  export type AptidaoMinOrderByAggregateInput = {
    id_aptidao?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrder
  }

  export type AptidaoSumOrderByAggregateInput = {
    nivel?: SortOrder
  }

  export type SoftSkillCountOrderByAggregateInput = {
    id_softskill?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type SoftSkillAvgOrderByAggregateInput = {
    nivel?: SortOrder
  }

  export type SoftSkillMaxOrderByAggregateInput = {
    id_softskill?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type SoftSkillMinOrderByAggregateInput = {
    id_softskill?: SortOrder
    id_aluno?: SortOrder
    nome?: SortOrder
    nivel?: SortOrder
    descricao?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type SoftSkillSumOrderByAggregateInput = {
    nivel?: SortOrder
  }

  export type EmpresaCreateNestedOneWithoutRecrutadoresInput = {
    create?: XOR<EmpresaCreateWithoutRecrutadoresInput, EmpresaUncheckedCreateWithoutRecrutadoresInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutRecrutadoresInput
    connect?: EmpresaWhereUniqueInput
  }

  export type ContratacaoCreateNestedManyWithoutRecrutadorInput = {
    create?: XOR<ContratacaoCreateWithoutRecrutadorInput, ContratacaoUncheckedCreateWithoutRecrutadorInput> | ContratacaoCreateWithoutRecrutadorInput[] | ContratacaoUncheckedCreateWithoutRecrutadorInput[]
    connectOrCreate?: ContratacaoCreateOrConnectWithoutRecrutadorInput | ContratacaoCreateOrConnectWithoutRecrutadorInput[]
    createMany?: ContratacaoCreateManyRecrutadorInputEnvelope
    connect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
  }

  export type ContratacaoUncheckedCreateNestedManyWithoutRecrutadorInput = {
    create?: XOR<ContratacaoCreateWithoutRecrutadorInput, ContratacaoUncheckedCreateWithoutRecrutadorInput> | ContratacaoCreateWithoutRecrutadorInput[] | ContratacaoUncheckedCreateWithoutRecrutadorInput[]
    connectOrCreate?: ContratacaoCreateOrConnectWithoutRecrutadorInput | ContratacaoCreateOrConnectWithoutRecrutadorInput[]
    createMany?: ContratacaoCreateManyRecrutadorInputEnvelope
    connect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmpresaUpdateOneRequiredWithoutRecrutadoresNestedInput = {
    create?: XOR<EmpresaCreateWithoutRecrutadoresInput, EmpresaUncheckedCreateWithoutRecrutadoresInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutRecrutadoresInput
    upsert?: EmpresaUpsertWithoutRecrutadoresInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutRecrutadoresInput, EmpresaUpdateWithoutRecrutadoresInput>, EmpresaUncheckedUpdateWithoutRecrutadoresInput>
  }

  export type ContratacaoUpdateManyWithoutRecrutadorNestedInput = {
    create?: XOR<ContratacaoCreateWithoutRecrutadorInput, ContratacaoUncheckedCreateWithoutRecrutadorInput> | ContratacaoCreateWithoutRecrutadorInput[] | ContratacaoUncheckedCreateWithoutRecrutadorInput[]
    connectOrCreate?: ContratacaoCreateOrConnectWithoutRecrutadorInput | ContratacaoCreateOrConnectWithoutRecrutadorInput[]
    upsert?: ContratacaoUpsertWithWhereUniqueWithoutRecrutadorInput | ContratacaoUpsertWithWhereUniqueWithoutRecrutadorInput[]
    createMany?: ContratacaoCreateManyRecrutadorInputEnvelope
    set?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    disconnect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    delete?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    connect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    update?: ContratacaoUpdateWithWhereUniqueWithoutRecrutadorInput | ContratacaoUpdateWithWhereUniqueWithoutRecrutadorInput[]
    updateMany?: ContratacaoUpdateManyWithWhereWithoutRecrutadorInput | ContratacaoUpdateManyWithWhereWithoutRecrutadorInput[]
    deleteMany?: ContratacaoScalarWhereInput | ContratacaoScalarWhereInput[]
  }

  export type ContratacaoUncheckedUpdateManyWithoutRecrutadorNestedInput = {
    create?: XOR<ContratacaoCreateWithoutRecrutadorInput, ContratacaoUncheckedCreateWithoutRecrutadorInput> | ContratacaoCreateWithoutRecrutadorInput[] | ContratacaoUncheckedCreateWithoutRecrutadorInput[]
    connectOrCreate?: ContratacaoCreateOrConnectWithoutRecrutadorInput | ContratacaoCreateOrConnectWithoutRecrutadorInput[]
    upsert?: ContratacaoUpsertWithWhereUniqueWithoutRecrutadorInput | ContratacaoUpsertWithWhereUniqueWithoutRecrutadorInput[]
    createMany?: ContratacaoCreateManyRecrutadorInputEnvelope
    set?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    disconnect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    delete?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    connect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    update?: ContratacaoUpdateWithWhereUniqueWithoutRecrutadorInput | ContratacaoUpdateWithWhereUniqueWithoutRecrutadorInput[]
    updateMany?: ContratacaoUpdateManyWithWhereWithoutRecrutadorInput | ContratacaoUpdateManyWithWhereWithoutRecrutadorInput[]
    deleteMany?: ContratacaoScalarWhereInput | ContratacaoScalarWhereInput[]
  }

  export type RecrutadorCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<RecrutadorCreateWithoutEmpresaInput, RecrutadorUncheckedCreateWithoutEmpresaInput> | RecrutadorCreateWithoutEmpresaInput[] | RecrutadorUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: RecrutadorCreateOrConnectWithoutEmpresaInput | RecrutadorCreateOrConnectWithoutEmpresaInput[]
    createMany?: RecrutadorCreateManyEmpresaInputEnvelope
    connect?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
  }

  export type RecrutadorUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<RecrutadorCreateWithoutEmpresaInput, RecrutadorUncheckedCreateWithoutEmpresaInput> | RecrutadorCreateWithoutEmpresaInput[] | RecrutadorUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: RecrutadorCreateOrConnectWithoutEmpresaInput | RecrutadorCreateOrConnectWithoutEmpresaInput[]
    createMany?: RecrutadorCreateManyEmpresaInputEnvelope
    connect?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RecrutadorUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<RecrutadorCreateWithoutEmpresaInput, RecrutadorUncheckedCreateWithoutEmpresaInput> | RecrutadorCreateWithoutEmpresaInput[] | RecrutadorUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: RecrutadorCreateOrConnectWithoutEmpresaInput | RecrutadorCreateOrConnectWithoutEmpresaInput[]
    upsert?: RecrutadorUpsertWithWhereUniqueWithoutEmpresaInput | RecrutadorUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: RecrutadorCreateManyEmpresaInputEnvelope
    set?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
    disconnect?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
    delete?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
    connect?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
    update?: RecrutadorUpdateWithWhereUniqueWithoutEmpresaInput | RecrutadorUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: RecrutadorUpdateManyWithWhereWithoutEmpresaInput | RecrutadorUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: RecrutadorScalarWhereInput | RecrutadorScalarWhereInput[]
  }

  export type RecrutadorUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<RecrutadorCreateWithoutEmpresaInput, RecrutadorUncheckedCreateWithoutEmpresaInput> | RecrutadorCreateWithoutEmpresaInput[] | RecrutadorUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: RecrutadorCreateOrConnectWithoutEmpresaInput | RecrutadorCreateOrConnectWithoutEmpresaInput[]
    upsert?: RecrutadorUpsertWithWhereUniqueWithoutEmpresaInput | RecrutadorUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: RecrutadorCreateManyEmpresaInputEnvelope
    set?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
    disconnect?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
    delete?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
    connect?: RecrutadorWhereUniqueInput | RecrutadorWhereUniqueInput[]
    update?: RecrutadorUpdateWithWhereUniqueWithoutEmpresaInput | RecrutadorUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: RecrutadorUpdateManyWithWhereWithoutEmpresaInput | RecrutadorUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: RecrutadorScalarWhereInput | RecrutadorScalarWhereInput[]
  }

  export type ContratacaoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ContratacaoCreateWithoutAlunoInput, ContratacaoUncheckedCreateWithoutAlunoInput> | ContratacaoCreateWithoutAlunoInput[] | ContratacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ContratacaoCreateOrConnectWithoutAlunoInput | ContratacaoCreateOrConnectWithoutAlunoInput[]
    createMany?: ContratacaoCreateManyAlunoInputEnvelope
    connect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
  }

  export type NotaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<NotaCreateWithoutAlunoInput, NotaUncheckedCreateWithoutAlunoInput> | NotaCreateWithoutAlunoInput[] | NotaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: NotaCreateOrConnectWithoutAlunoInput | NotaCreateOrConnectWithoutAlunoInput[]
    createMany?: NotaCreateManyAlunoInputEnvelope
    connect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
  }

  export type AptidaoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AptidaoCreateWithoutAlunoInput, AptidaoUncheckedCreateWithoutAlunoInput> | AptidaoCreateWithoutAlunoInput[] | AptidaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AptidaoCreateOrConnectWithoutAlunoInput | AptidaoCreateOrConnectWithoutAlunoInput[]
    createMany?: AptidaoCreateManyAlunoInputEnvelope
    connect?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
  }

  export type SoftSkillCreateNestedManyWithoutAlunoInput = {
    create?: XOR<SoftSkillCreateWithoutAlunoInput, SoftSkillUncheckedCreateWithoutAlunoInput> | SoftSkillCreateWithoutAlunoInput[] | SoftSkillUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: SoftSkillCreateOrConnectWithoutAlunoInput | SoftSkillCreateOrConnectWithoutAlunoInput[]
    createMany?: SoftSkillCreateManyAlunoInputEnvelope
    connect?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
  }

  export type ContratacaoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ContratacaoCreateWithoutAlunoInput, ContratacaoUncheckedCreateWithoutAlunoInput> | ContratacaoCreateWithoutAlunoInput[] | ContratacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ContratacaoCreateOrConnectWithoutAlunoInput | ContratacaoCreateOrConnectWithoutAlunoInput[]
    createMany?: ContratacaoCreateManyAlunoInputEnvelope
    connect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
  }

  export type NotaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<NotaCreateWithoutAlunoInput, NotaUncheckedCreateWithoutAlunoInput> | NotaCreateWithoutAlunoInput[] | NotaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: NotaCreateOrConnectWithoutAlunoInput | NotaCreateOrConnectWithoutAlunoInput[]
    createMany?: NotaCreateManyAlunoInputEnvelope
    connect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
  }

  export type AptidaoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AptidaoCreateWithoutAlunoInput, AptidaoUncheckedCreateWithoutAlunoInput> | AptidaoCreateWithoutAlunoInput[] | AptidaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AptidaoCreateOrConnectWithoutAlunoInput | AptidaoCreateOrConnectWithoutAlunoInput[]
    createMany?: AptidaoCreateManyAlunoInputEnvelope
    connect?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
  }

  export type SoftSkillUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<SoftSkillCreateWithoutAlunoInput, SoftSkillUncheckedCreateWithoutAlunoInput> | SoftSkillCreateWithoutAlunoInput[] | SoftSkillUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: SoftSkillCreateOrConnectWithoutAlunoInput | SoftSkillCreateOrConnectWithoutAlunoInput[]
    createMany?: SoftSkillCreateManyAlunoInputEnvelope
    connect?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContratacaoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ContratacaoCreateWithoutAlunoInput, ContratacaoUncheckedCreateWithoutAlunoInput> | ContratacaoCreateWithoutAlunoInput[] | ContratacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ContratacaoCreateOrConnectWithoutAlunoInput | ContratacaoCreateOrConnectWithoutAlunoInput[]
    upsert?: ContratacaoUpsertWithWhereUniqueWithoutAlunoInput | ContratacaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ContratacaoCreateManyAlunoInputEnvelope
    set?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    disconnect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    delete?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    connect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    update?: ContratacaoUpdateWithWhereUniqueWithoutAlunoInput | ContratacaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ContratacaoUpdateManyWithWhereWithoutAlunoInput | ContratacaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ContratacaoScalarWhereInput | ContratacaoScalarWhereInput[]
  }

  export type NotaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<NotaCreateWithoutAlunoInput, NotaUncheckedCreateWithoutAlunoInput> | NotaCreateWithoutAlunoInput[] | NotaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: NotaCreateOrConnectWithoutAlunoInput | NotaCreateOrConnectWithoutAlunoInput[]
    upsert?: NotaUpsertWithWhereUniqueWithoutAlunoInput | NotaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: NotaCreateManyAlunoInputEnvelope
    set?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    disconnect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    delete?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    connect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    update?: NotaUpdateWithWhereUniqueWithoutAlunoInput | NotaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: NotaUpdateManyWithWhereWithoutAlunoInput | NotaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: NotaScalarWhereInput | NotaScalarWhereInput[]
  }

  export type AptidaoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AptidaoCreateWithoutAlunoInput, AptidaoUncheckedCreateWithoutAlunoInput> | AptidaoCreateWithoutAlunoInput[] | AptidaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AptidaoCreateOrConnectWithoutAlunoInput | AptidaoCreateOrConnectWithoutAlunoInput[]
    upsert?: AptidaoUpsertWithWhereUniqueWithoutAlunoInput | AptidaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AptidaoCreateManyAlunoInputEnvelope
    set?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
    disconnect?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
    delete?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
    connect?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
    update?: AptidaoUpdateWithWhereUniqueWithoutAlunoInput | AptidaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AptidaoUpdateManyWithWhereWithoutAlunoInput | AptidaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AptidaoScalarWhereInput | AptidaoScalarWhereInput[]
  }

  export type SoftSkillUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<SoftSkillCreateWithoutAlunoInput, SoftSkillUncheckedCreateWithoutAlunoInput> | SoftSkillCreateWithoutAlunoInput[] | SoftSkillUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: SoftSkillCreateOrConnectWithoutAlunoInput | SoftSkillCreateOrConnectWithoutAlunoInput[]
    upsert?: SoftSkillUpsertWithWhereUniqueWithoutAlunoInput | SoftSkillUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: SoftSkillCreateManyAlunoInputEnvelope
    set?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
    disconnect?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
    delete?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
    connect?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
    update?: SoftSkillUpdateWithWhereUniqueWithoutAlunoInput | SoftSkillUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: SoftSkillUpdateManyWithWhereWithoutAlunoInput | SoftSkillUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: SoftSkillScalarWhereInput | SoftSkillScalarWhereInput[]
  }

  export type ContratacaoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ContratacaoCreateWithoutAlunoInput, ContratacaoUncheckedCreateWithoutAlunoInput> | ContratacaoCreateWithoutAlunoInput[] | ContratacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ContratacaoCreateOrConnectWithoutAlunoInput | ContratacaoCreateOrConnectWithoutAlunoInput[]
    upsert?: ContratacaoUpsertWithWhereUniqueWithoutAlunoInput | ContratacaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ContratacaoCreateManyAlunoInputEnvelope
    set?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    disconnect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    delete?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    connect?: ContratacaoWhereUniqueInput | ContratacaoWhereUniqueInput[]
    update?: ContratacaoUpdateWithWhereUniqueWithoutAlunoInput | ContratacaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ContratacaoUpdateManyWithWhereWithoutAlunoInput | ContratacaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ContratacaoScalarWhereInput | ContratacaoScalarWhereInput[]
  }

  export type NotaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<NotaCreateWithoutAlunoInput, NotaUncheckedCreateWithoutAlunoInput> | NotaCreateWithoutAlunoInput[] | NotaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: NotaCreateOrConnectWithoutAlunoInput | NotaCreateOrConnectWithoutAlunoInput[]
    upsert?: NotaUpsertWithWhereUniqueWithoutAlunoInput | NotaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: NotaCreateManyAlunoInputEnvelope
    set?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    disconnect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    delete?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    connect?: NotaWhereUniqueInput | NotaWhereUniqueInput[]
    update?: NotaUpdateWithWhereUniqueWithoutAlunoInput | NotaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: NotaUpdateManyWithWhereWithoutAlunoInput | NotaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: NotaScalarWhereInput | NotaScalarWhereInput[]
  }

  export type AptidaoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AptidaoCreateWithoutAlunoInput, AptidaoUncheckedCreateWithoutAlunoInput> | AptidaoCreateWithoutAlunoInput[] | AptidaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AptidaoCreateOrConnectWithoutAlunoInput | AptidaoCreateOrConnectWithoutAlunoInput[]
    upsert?: AptidaoUpsertWithWhereUniqueWithoutAlunoInput | AptidaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AptidaoCreateManyAlunoInputEnvelope
    set?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
    disconnect?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
    delete?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
    connect?: AptidaoWhereUniqueInput | AptidaoWhereUniqueInput[]
    update?: AptidaoUpdateWithWhereUniqueWithoutAlunoInput | AptidaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AptidaoUpdateManyWithWhereWithoutAlunoInput | AptidaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AptidaoScalarWhereInput | AptidaoScalarWhereInput[]
  }

  export type SoftSkillUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<SoftSkillCreateWithoutAlunoInput, SoftSkillUncheckedCreateWithoutAlunoInput> | SoftSkillCreateWithoutAlunoInput[] | SoftSkillUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: SoftSkillCreateOrConnectWithoutAlunoInput | SoftSkillCreateOrConnectWithoutAlunoInput[]
    upsert?: SoftSkillUpsertWithWhereUniqueWithoutAlunoInput | SoftSkillUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: SoftSkillCreateManyAlunoInputEnvelope
    set?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
    disconnect?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
    delete?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
    connect?: SoftSkillWhereUniqueInput | SoftSkillWhereUniqueInput[]
    update?: SoftSkillUpdateWithWhereUniqueWithoutAlunoInput | SoftSkillUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: SoftSkillUpdateManyWithWhereWithoutAlunoInput | SoftSkillUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: SoftSkillScalarWhereInput | SoftSkillScalarWhereInput[]
  }

  export type RecrutadorCreateNestedOneWithoutContratacoesInput = {
    create?: XOR<RecrutadorCreateWithoutContratacoesInput, RecrutadorUncheckedCreateWithoutContratacoesInput>
    connectOrCreate?: RecrutadorCreateOrConnectWithoutContratacoesInput
    connect?: RecrutadorWhereUniqueInput
  }

  export type AlunoCreateNestedOneWithoutContratacoesInput = {
    create?: XOR<AlunoCreateWithoutContratacoesInput, AlunoUncheckedCreateWithoutContratacoesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutContratacoesInput
    connect?: AlunoWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecrutadorUpdateOneRequiredWithoutContratacoesNestedInput = {
    create?: XOR<RecrutadorCreateWithoutContratacoesInput, RecrutadorUncheckedCreateWithoutContratacoesInput>
    connectOrCreate?: RecrutadorCreateOrConnectWithoutContratacoesInput
    upsert?: RecrutadorUpsertWithoutContratacoesInput
    connect?: RecrutadorWhereUniqueInput
    update?: XOR<XOR<RecrutadorUpdateToOneWithWhereWithoutContratacoesInput, RecrutadorUpdateWithoutContratacoesInput>, RecrutadorUncheckedUpdateWithoutContratacoesInput>
  }

  export type AlunoUpdateOneRequiredWithoutContratacoesNestedInput = {
    create?: XOR<AlunoCreateWithoutContratacoesInput, AlunoUncheckedCreateWithoutContratacoesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutContratacoesInput
    upsert?: AlunoUpsertWithoutContratacoesInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutContratacoesInput, AlunoUpdateWithoutContratacoesInput>, AlunoUncheckedUpdateWithoutContratacoesInput>
  }

  export type AlunoCreateNestedOneWithoutNotasInput = {
    create?: XOR<AlunoCreateWithoutNotasInput, AlunoUncheckedCreateWithoutNotasInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutNotasInput
    connect?: AlunoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlunoUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<AlunoCreateWithoutNotasInput, AlunoUncheckedCreateWithoutNotasInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutNotasInput
    upsert?: AlunoUpsertWithoutNotasInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutNotasInput, AlunoUpdateWithoutNotasInput>, AlunoUncheckedUpdateWithoutNotasInput>
  }

  export type AlunoCreateNestedOneWithoutAptidoesInput = {
    create?: XOR<AlunoCreateWithoutAptidoesInput, AlunoUncheckedCreateWithoutAptidoesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutAptidoesInput
    connect?: AlunoWhereUniqueInput
  }

  export type AlunoUpdateOneRequiredWithoutAptidoesNestedInput = {
    create?: XOR<AlunoCreateWithoutAptidoesInput, AlunoUncheckedCreateWithoutAptidoesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutAptidoesInput
    upsert?: AlunoUpsertWithoutAptidoesInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutAptidoesInput, AlunoUpdateWithoutAptidoesInput>, AlunoUncheckedUpdateWithoutAptidoesInput>
  }

  export type AlunoCreateNestedOneWithoutSoftskillsInput = {
    create?: XOR<AlunoCreateWithoutSoftskillsInput, AlunoUncheckedCreateWithoutSoftskillsInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutSoftskillsInput
    connect?: AlunoWhereUniqueInput
  }

  export type AlunoUpdateOneRequiredWithoutSoftskillsNestedInput = {
    create?: XOR<AlunoCreateWithoutSoftskillsInput, AlunoUncheckedCreateWithoutSoftskillsInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutSoftskillsInput
    upsert?: AlunoUpsertWithoutSoftskillsInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutSoftskillsInput, AlunoUpdateWithoutSoftskillsInput>, AlunoUncheckedUpdateWithoutSoftskillsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EmpresaCreateWithoutRecrutadoresInput = {
    id_empresa?: string
    nome: string
    cnpj: string
    endereco: string
    setor: string
    descricao?: string | null
    website?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type EmpresaUncheckedCreateWithoutRecrutadoresInput = {
    id_empresa?: string
    nome: string
    cnpj: string
    endereco: string
    setor: string
    descricao?: string | null
    website?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type EmpresaCreateOrConnectWithoutRecrutadoresInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutRecrutadoresInput, EmpresaUncheckedCreateWithoutRecrutadoresInput>
  }

  export type ContratacaoCreateWithoutRecrutadorInput = {
    id_contratacao?: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
    aluno: AlunoCreateNestedOneWithoutContratacoesInput
  }

  export type ContratacaoUncheckedCreateWithoutRecrutadorInput = {
    id_contratacao?: string
    id_aluno: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
  }

  export type ContratacaoCreateOrConnectWithoutRecrutadorInput = {
    where: ContratacaoWhereUniqueInput
    create: XOR<ContratacaoCreateWithoutRecrutadorInput, ContratacaoUncheckedCreateWithoutRecrutadorInput>
  }

  export type ContratacaoCreateManyRecrutadorInputEnvelope = {
    data: ContratacaoCreateManyRecrutadorInput | ContratacaoCreateManyRecrutadorInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutRecrutadoresInput = {
    update: XOR<EmpresaUpdateWithoutRecrutadoresInput, EmpresaUncheckedUpdateWithoutRecrutadoresInput>
    create: XOR<EmpresaCreateWithoutRecrutadoresInput, EmpresaUncheckedCreateWithoutRecrutadoresInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutRecrutadoresInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutRecrutadoresInput, EmpresaUncheckedUpdateWithoutRecrutadoresInput>
  }

  export type EmpresaUpdateWithoutRecrutadoresInput = {
    id_empresa?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateWithoutRecrutadoresInput = {
    id_empresa?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratacaoUpsertWithWhereUniqueWithoutRecrutadorInput = {
    where: ContratacaoWhereUniqueInput
    update: XOR<ContratacaoUpdateWithoutRecrutadorInput, ContratacaoUncheckedUpdateWithoutRecrutadorInput>
    create: XOR<ContratacaoCreateWithoutRecrutadorInput, ContratacaoUncheckedCreateWithoutRecrutadorInput>
  }

  export type ContratacaoUpdateWithWhereUniqueWithoutRecrutadorInput = {
    where: ContratacaoWhereUniqueInput
    data: XOR<ContratacaoUpdateWithoutRecrutadorInput, ContratacaoUncheckedUpdateWithoutRecrutadorInput>
  }

  export type ContratacaoUpdateManyWithWhereWithoutRecrutadorInput = {
    where: ContratacaoScalarWhereInput
    data: XOR<ContratacaoUpdateManyMutationInput, ContratacaoUncheckedUpdateManyWithoutRecrutadorInput>
  }

  export type ContratacaoScalarWhereInput = {
    AND?: ContratacaoScalarWhereInput | ContratacaoScalarWhereInput[]
    OR?: ContratacaoScalarWhereInput[]
    NOT?: ContratacaoScalarWhereInput | ContratacaoScalarWhereInput[]
    id_contratacao?: StringFilter<"Contratacao"> | string
    id_recrutador?: StringFilter<"Contratacao"> | string
    id_aluno?: StringFilter<"Contratacao"> | string
    data_contratacao?: DateTimeFilter<"Contratacao"> | Date | string
    cargo?: StringFilter<"Contratacao"> | string
    salario?: FloatNullableFilter<"Contratacao"> | number | null
    status?: StringFilter<"Contratacao"> | string
  }

  export type RecrutadorCreateWithoutEmpresaInput = {
    id_recrutador?: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoCreateNestedManyWithoutRecrutadorInput
  }

  export type RecrutadorUncheckedCreateWithoutEmpresaInput = {
    id_recrutador?: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoUncheckedCreateNestedManyWithoutRecrutadorInput
  }

  export type RecrutadorCreateOrConnectWithoutEmpresaInput = {
    where: RecrutadorWhereUniqueInput
    create: XOR<RecrutadorCreateWithoutEmpresaInput, RecrutadorUncheckedCreateWithoutEmpresaInput>
  }

  export type RecrutadorCreateManyEmpresaInputEnvelope = {
    data: RecrutadorCreateManyEmpresaInput | RecrutadorCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type RecrutadorUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: RecrutadorWhereUniqueInput
    update: XOR<RecrutadorUpdateWithoutEmpresaInput, RecrutadorUncheckedUpdateWithoutEmpresaInput>
    create: XOR<RecrutadorCreateWithoutEmpresaInput, RecrutadorUncheckedCreateWithoutEmpresaInput>
  }

  export type RecrutadorUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: RecrutadorWhereUniqueInput
    data: XOR<RecrutadorUpdateWithoutEmpresaInput, RecrutadorUncheckedUpdateWithoutEmpresaInput>
  }

  export type RecrutadorUpdateManyWithWhereWithoutEmpresaInput = {
    where: RecrutadorScalarWhereInput
    data: XOR<RecrutadorUpdateManyMutationInput, RecrutadorUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type RecrutadorScalarWhereInput = {
    AND?: RecrutadorScalarWhereInput | RecrutadorScalarWhereInput[]
    OR?: RecrutadorScalarWhereInput[]
    NOT?: RecrutadorScalarWhereInput | RecrutadorScalarWhereInput[]
    id_recrutador?: StringFilter<"Recrutador"> | string
    nome?: StringFilter<"Recrutador"> | string
    email?: StringFilter<"Recrutador"> | string
    senha?: StringFilter<"Recrutador"> | string
    cargo?: StringFilter<"Recrutador"> | string
    telefone?: StringFilter<"Recrutador"> | string
    id_empresa?: StringFilter<"Recrutador"> | string
    data_criacao?: DateTimeFilter<"Recrutador"> | Date | string
    data_atualizacao?: DateTimeFilter<"Recrutador"> | Date | string
  }

  export type ContratacaoCreateWithoutAlunoInput = {
    id_contratacao?: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
    recrutador: RecrutadorCreateNestedOneWithoutContratacoesInput
  }

  export type ContratacaoUncheckedCreateWithoutAlunoInput = {
    id_contratacao?: string
    id_recrutador: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
  }

  export type ContratacaoCreateOrConnectWithoutAlunoInput = {
    where: ContratacaoWhereUniqueInput
    create: XOR<ContratacaoCreateWithoutAlunoInput, ContratacaoUncheckedCreateWithoutAlunoInput>
  }

  export type ContratacaoCreateManyAlunoInputEnvelope = {
    data: ContratacaoCreateManyAlunoInput | ContratacaoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type NotaCreateWithoutAlunoInput = {
    id_nota?: string
    disciplina: string
    nota: number
    semestre: number
  }

  export type NotaUncheckedCreateWithoutAlunoInput = {
    id_nota?: string
    disciplina: string
    nota: number
    semestre: number
  }

  export type NotaCreateOrConnectWithoutAlunoInput = {
    where: NotaWhereUniqueInput
    create: XOR<NotaCreateWithoutAlunoInput, NotaUncheckedCreateWithoutAlunoInput>
  }

  export type NotaCreateManyAlunoInputEnvelope = {
    data: NotaCreateManyAlunoInput | NotaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type AptidaoCreateWithoutAlunoInput = {
    id_aptidao?: string
    nome: string
    nivel: number
    descricao?: string | null
  }

  export type AptidaoUncheckedCreateWithoutAlunoInput = {
    id_aptidao?: string
    nome: string
    nivel: number
    descricao?: string | null
  }

  export type AptidaoCreateOrConnectWithoutAlunoInput = {
    where: AptidaoWhereUniqueInput
    create: XOR<AptidaoCreateWithoutAlunoInput, AptidaoUncheckedCreateWithoutAlunoInput>
  }

  export type AptidaoCreateManyAlunoInputEnvelope = {
    data: AptidaoCreateManyAlunoInput | AptidaoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type SoftSkillCreateWithoutAlunoInput = {
    id_softskill?: string
    nome: string
    nivel: number
    descricao?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type SoftSkillUncheckedCreateWithoutAlunoInput = {
    id_softskill?: string
    nome: string
    nivel: number
    descricao?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type SoftSkillCreateOrConnectWithoutAlunoInput = {
    where: SoftSkillWhereUniqueInput
    create: XOR<SoftSkillCreateWithoutAlunoInput, SoftSkillUncheckedCreateWithoutAlunoInput>
  }

  export type SoftSkillCreateManyAlunoInputEnvelope = {
    data: SoftSkillCreateManyAlunoInput | SoftSkillCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type ContratacaoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: ContratacaoWhereUniqueInput
    update: XOR<ContratacaoUpdateWithoutAlunoInput, ContratacaoUncheckedUpdateWithoutAlunoInput>
    create: XOR<ContratacaoCreateWithoutAlunoInput, ContratacaoUncheckedCreateWithoutAlunoInput>
  }

  export type ContratacaoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: ContratacaoWhereUniqueInput
    data: XOR<ContratacaoUpdateWithoutAlunoInput, ContratacaoUncheckedUpdateWithoutAlunoInput>
  }

  export type ContratacaoUpdateManyWithWhereWithoutAlunoInput = {
    where: ContratacaoScalarWhereInput
    data: XOR<ContratacaoUpdateManyMutationInput, ContratacaoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type NotaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: NotaWhereUniqueInput
    update: XOR<NotaUpdateWithoutAlunoInput, NotaUncheckedUpdateWithoutAlunoInput>
    create: XOR<NotaCreateWithoutAlunoInput, NotaUncheckedCreateWithoutAlunoInput>
  }

  export type NotaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: NotaWhereUniqueInput
    data: XOR<NotaUpdateWithoutAlunoInput, NotaUncheckedUpdateWithoutAlunoInput>
  }

  export type NotaUpdateManyWithWhereWithoutAlunoInput = {
    where: NotaScalarWhereInput
    data: XOR<NotaUpdateManyMutationInput, NotaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type NotaScalarWhereInput = {
    AND?: NotaScalarWhereInput | NotaScalarWhereInput[]
    OR?: NotaScalarWhereInput[]
    NOT?: NotaScalarWhereInput | NotaScalarWhereInput[]
    id_nota?: StringFilter<"Nota"> | string
    id_aluno?: StringFilter<"Nota"> | string
    disciplina?: StringFilter<"Nota"> | string
    nota?: FloatFilter<"Nota"> | number
    semestre?: IntFilter<"Nota"> | number
  }

  export type AptidaoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: AptidaoWhereUniqueInput
    update: XOR<AptidaoUpdateWithoutAlunoInput, AptidaoUncheckedUpdateWithoutAlunoInput>
    create: XOR<AptidaoCreateWithoutAlunoInput, AptidaoUncheckedCreateWithoutAlunoInput>
  }

  export type AptidaoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: AptidaoWhereUniqueInput
    data: XOR<AptidaoUpdateWithoutAlunoInput, AptidaoUncheckedUpdateWithoutAlunoInput>
  }

  export type AptidaoUpdateManyWithWhereWithoutAlunoInput = {
    where: AptidaoScalarWhereInput
    data: XOR<AptidaoUpdateManyMutationInput, AptidaoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type AptidaoScalarWhereInput = {
    AND?: AptidaoScalarWhereInput | AptidaoScalarWhereInput[]
    OR?: AptidaoScalarWhereInput[]
    NOT?: AptidaoScalarWhereInput | AptidaoScalarWhereInput[]
    id_aptidao?: StringFilter<"Aptidao"> | string
    id_aluno?: StringFilter<"Aptidao"> | string
    nome?: StringFilter<"Aptidao"> | string
    nivel?: IntFilter<"Aptidao"> | number
    descricao?: StringNullableFilter<"Aptidao"> | string | null
  }

  export type SoftSkillUpsertWithWhereUniqueWithoutAlunoInput = {
    where: SoftSkillWhereUniqueInput
    update: XOR<SoftSkillUpdateWithoutAlunoInput, SoftSkillUncheckedUpdateWithoutAlunoInput>
    create: XOR<SoftSkillCreateWithoutAlunoInput, SoftSkillUncheckedCreateWithoutAlunoInput>
  }

  export type SoftSkillUpdateWithWhereUniqueWithoutAlunoInput = {
    where: SoftSkillWhereUniqueInput
    data: XOR<SoftSkillUpdateWithoutAlunoInput, SoftSkillUncheckedUpdateWithoutAlunoInput>
  }

  export type SoftSkillUpdateManyWithWhereWithoutAlunoInput = {
    where: SoftSkillScalarWhereInput
    data: XOR<SoftSkillUpdateManyMutationInput, SoftSkillUncheckedUpdateManyWithoutAlunoInput>
  }

  export type SoftSkillScalarWhereInput = {
    AND?: SoftSkillScalarWhereInput | SoftSkillScalarWhereInput[]
    OR?: SoftSkillScalarWhereInput[]
    NOT?: SoftSkillScalarWhereInput | SoftSkillScalarWhereInput[]
    id_softskill?: StringFilter<"SoftSkill"> | string
    id_aluno?: StringFilter<"SoftSkill"> | string
    nome?: StringFilter<"SoftSkill"> | string
    nivel?: IntFilter<"SoftSkill"> | number
    descricao?: StringNullableFilter<"SoftSkill"> | string | null
    data_criacao?: DateTimeFilter<"SoftSkill"> | Date | string
    data_atualizacao?: DateTimeFilter<"SoftSkill"> | Date | string
  }

  export type RecrutadorCreateWithoutContratacoesInput = {
    id_recrutador?: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    empresa: EmpresaCreateNestedOneWithoutRecrutadoresInput
  }

  export type RecrutadorUncheckedCreateWithoutContratacoesInput = {
    id_recrutador?: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    id_empresa: string
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type RecrutadorCreateOrConnectWithoutContratacoesInput = {
    where: RecrutadorWhereUniqueInput
    create: XOR<RecrutadorCreateWithoutContratacoesInput, RecrutadorUncheckedCreateWithoutContratacoesInput>
  }

  export type AlunoCreateWithoutContratacoesInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    notas?: NotaCreateNestedManyWithoutAlunoInput
    aptidoes?: AptidaoCreateNestedManyWithoutAlunoInput
    softskills?: SoftSkillCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutContratacoesInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    notas?: NotaUncheckedCreateNestedManyWithoutAlunoInput
    aptidoes?: AptidaoUncheckedCreateNestedManyWithoutAlunoInput
    softskills?: SoftSkillUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutContratacoesInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutContratacoesInput, AlunoUncheckedCreateWithoutContratacoesInput>
  }

  export type RecrutadorUpsertWithoutContratacoesInput = {
    update: XOR<RecrutadorUpdateWithoutContratacoesInput, RecrutadorUncheckedUpdateWithoutContratacoesInput>
    create: XOR<RecrutadorCreateWithoutContratacoesInput, RecrutadorUncheckedCreateWithoutContratacoesInput>
    where?: RecrutadorWhereInput
  }

  export type RecrutadorUpdateToOneWithWhereWithoutContratacoesInput = {
    where?: RecrutadorWhereInput
    data: XOR<RecrutadorUpdateWithoutContratacoesInput, RecrutadorUncheckedUpdateWithoutContratacoesInput>
  }

  export type RecrutadorUpdateWithoutContratacoesInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutRecrutadoresNestedInput
  }

  export type RecrutadorUncheckedUpdateWithoutContratacoesInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUpsertWithoutContratacoesInput = {
    update: XOR<AlunoUpdateWithoutContratacoesInput, AlunoUncheckedUpdateWithoutContratacoesInput>
    create: XOR<AlunoCreateWithoutContratacoesInput, AlunoUncheckedCreateWithoutContratacoesInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutContratacoesInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutContratacoesInput, AlunoUncheckedUpdateWithoutContratacoesInput>
  }

  export type AlunoUpdateWithoutContratacoesInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NotaUpdateManyWithoutAlunoNestedInput
    aptidoes?: AptidaoUpdateManyWithoutAlunoNestedInput
    softskills?: SoftSkillUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutContratacoesInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NotaUncheckedUpdateManyWithoutAlunoNestedInput
    aptidoes?: AptidaoUncheckedUpdateManyWithoutAlunoNestedInput
    softskills?: SoftSkillUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateWithoutNotasInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoCreateNestedManyWithoutAlunoInput
    aptidoes?: AptidaoCreateNestedManyWithoutAlunoInput
    softskills?: SoftSkillCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutNotasInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoUncheckedCreateNestedManyWithoutAlunoInput
    aptidoes?: AptidaoUncheckedCreateNestedManyWithoutAlunoInput
    softskills?: SoftSkillUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutNotasInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutNotasInput, AlunoUncheckedCreateWithoutNotasInput>
  }

  export type AlunoUpsertWithoutNotasInput = {
    update: XOR<AlunoUpdateWithoutNotasInput, AlunoUncheckedUpdateWithoutNotasInput>
    create: XOR<AlunoCreateWithoutNotasInput, AlunoUncheckedCreateWithoutNotasInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutNotasInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutNotasInput, AlunoUncheckedUpdateWithoutNotasInput>
  }

  export type AlunoUpdateWithoutNotasInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUpdateManyWithoutAlunoNestedInput
    aptidoes?: AptidaoUpdateManyWithoutAlunoNestedInput
    softskills?: SoftSkillUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutNotasInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUncheckedUpdateManyWithoutAlunoNestedInput
    aptidoes?: AptidaoUncheckedUpdateManyWithoutAlunoNestedInput
    softskills?: SoftSkillUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateWithoutAptidoesInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoCreateNestedManyWithoutAlunoInput
    notas?: NotaCreateNestedManyWithoutAlunoInput
    softskills?: SoftSkillCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutAptidoesInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoUncheckedCreateNestedManyWithoutAlunoInput
    notas?: NotaUncheckedCreateNestedManyWithoutAlunoInput
    softskills?: SoftSkillUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutAptidoesInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutAptidoesInput, AlunoUncheckedCreateWithoutAptidoesInput>
  }

  export type AlunoUpsertWithoutAptidoesInput = {
    update: XOR<AlunoUpdateWithoutAptidoesInput, AlunoUncheckedUpdateWithoutAptidoesInput>
    create: XOR<AlunoCreateWithoutAptidoesInput, AlunoUncheckedCreateWithoutAptidoesInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutAptidoesInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutAptidoesInput, AlunoUncheckedUpdateWithoutAptidoesInput>
  }

  export type AlunoUpdateWithoutAptidoesInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUpdateManyWithoutAlunoNestedInput
    notas?: NotaUpdateManyWithoutAlunoNestedInput
    softskills?: SoftSkillUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutAptidoesInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUncheckedUpdateManyWithoutAlunoNestedInput
    notas?: NotaUncheckedUpdateManyWithoutAlunoNestedInput
    softskills?: SoftSkillUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateWithoutSoftskillsInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoCreateNestedManyWithoutAlunoInput
    notas?: NotaCreateNestedManyWithoutAlunoInput
    aptidoes?: AptidaoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutSoftskillsInput = {
    id_aluno?: string
    nome: string
    email: string
    senha: string
    matricula: string
    curso: string
    semestre_atual: number
    cpf: string
    telefone: string
    data_nascimento: Date | string
    endereco: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    solicitacoes?: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    contratacoes?: ContratacaoUncheckedCreateNestedManyWithoutAlunoInput
    notas?: NotaUncheckedCreateNestedManyWithoutAlunoInput
    aptidoes?: AptidaoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutSoftskillsInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutSoftskillsInput, AlunoUncheckedCreateWithoutSoftskillsInput>
  }

  export type AlunoUpsertWithoutSoftskillsInput = {
    update: XOR<AlunoUpdateWithoutSoftskillsInput, AlunoUncheckedUpdateWithoutSoftskillsInput>
    create: XOR<AlunoCreateWithoutSoftskillsInput, AlunoUncheckedCreateWithoutSoftskillsInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutSoftskillsInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutSoftskillsInput, AlunoUncheckedUpdateWithoutSoftskillsInput>
  }

  export type AlunoUpdateWithoutSoftskillsInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUpdateManyWithoutAlunoNestedInput
    notas?: NotaUpdateManyWithoutAlunoNestedInput
    aptidoes?: AptidaoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutSoftskillsInput = {
    id_aluno?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    semestre_atual?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    solicitacoes?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUncheckedUpdateManyWithoutAlunoNestedInput
    notas?: NotaUncheckedUpdateManyWithoutAlunoNestedInput
    aptidoes?: AptidaoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type ContratacaoCreateManyRecrutadorInput = {
    id_contratacao?: string
    id_aluno: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
  }

  export type ContratacaoUpdateWithoutRecrutadorInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUpdateOneRequiredWithoutContratacoesNestedInput
  }

  export type ContratacaoUncheckedUpdateWithoutRecrutadorInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContratacaoUncheckedUpdateManyWithoutRecrutadorInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RecrutadorCreateManyEmpresaInput = {
    id_recrutador?: string
    nome: string
    email: string
    senha: string
    cargo: string
    telefone: string
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type RecrutadorUpdateWithoutEmpresaInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUpdateManyWithoutRecrutadorNestedInput
  }

  export type RecrutadorUncheckedUpdateWithoutEmpresaInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contratacoes?: ContratacaoUncheckedUpdateManyWithoutRecrutadorNestedInput
  }

  export type RecrutadorUncheckedUpdateManyWithoutEmpresaInput = {
    id_recrutador?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratacaoCreateManyAlunoInput = {
    id_contratacao?: string
    id_recrutador: string
    data_contratacao?: Date | string
    cargo: string
    salario?: number | null
    status: string
  }

  export type NotaCreateManyAlunoInput = {
    id_nota?: string
    disciplina: string
    nota: number
    semestre: number
  }

  export type AptidaoCreateManyAlunoInput = {
    id_aptidao?: string
    nome: string
    nivel: number
    descricao?: string | null
  }

  export type SoftSkillCreateManyAlunoInput = {
    id_softskill?: string
    nome: string
    nivel: number
    descricao?: string | null
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type ContratacaoUpdateWithoutAlunoInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    recrutador?: RecrutadorUpdateOneRequiredWithoutContratacoesNestedInput
  }

  export type ContratacaoUncheckedUpdateWithoutAlunoInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    id_recrutador?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContratacaoUncheckedUpdateManyWithoutAlunoInput = {
    id_contratacao?: StringFieldUpdateOperationsInput | string
    id_recrutador?: StringFieldUpdateOperationsInput | string
    data_contratacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NotaUpdateWithoutAlunoInput = {
    id_nota?: StringFieldUpdateOperationsInput | string
    disciplina?: StringFieldUpdateOperationsInput | string
    nota?: FloatFieldUpdateOperationsInput | number
    semestre?: IntFieldUpdateOperationsInput | number
  }

  export type NotaUncheckedUpdateWithoutAlunoInput = {
    id_nota?: StringFieldUpdateOperationsInput | string
    disciplina?: StringFieldUpdateOperationsInput | string
    nota?: FloatFieldUpdateOperationsInput | number
    semestre?: IntFieldUpdateOperationsInput | number
  }

  export type NotaUncheckedUpdateManyWithoutAlunoInput = {
    id_nota?: StringFieldUpdateOperationsInput | string
    disciplina?: StringFieldUpdateOperationsInput | string
    nota?: FloatFieldUpdateOperationsInput | number
    semestre?: IntFieldUpdateOperationsInput | number
  }

  export type AptidaoUpdateWithoutAlunoInput = {
    id_aptidao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AptidaoUncheckedUpdateWithoutAlunoInput = {
    id_aptidao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AptidaoUncheckedUpdateManyWithoutAlunoInput = {
    id_aptidao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SoftSkillUpdateWithoutAlunoInput = {
    id_softskill?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftSkillUncheckedUpdateWithoutAlunoInput = {
    id_softskill?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftSkillUncheckedUpdateManyWithoutAlunoInput = {
    id_softskill?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
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