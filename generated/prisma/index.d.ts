
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Faculdade
 * 
 */
export type Faculdade = $Result.DefaultSelection<Prisma.$FaculdadePayload>
/**
 * Model Faculdade_Empresa
 * 
 */
export type Faculdade_Empresa = $Result.DefaultSelection<Prisma.$Faculdade_EmpresaPayload>
/**
 * Model Pergunta
 * 
 */
export type Pergunta = $Result.DefaultSelection<Prisma.$PerguntaPayload>
/**
 * Model OpcaoResposta
 * 
 */
export type OpcaoResposta = $Result.DefaultSelection<Prisma.$OpcaoRespostaPayload>
/**
 * Model Usuario_Acertos
 * 
 */
export type Usuario_Acertos = $Result.DefaultSelection<Prisma.$Usuario_AcertosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faculdade`: Exposes CRUD operations for the **Faculdade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculdades
    * const faculdades = await prisma.faculdade.findMany()
    * ```
    */
  get faculdade(): Prisma.FaculdadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faculdade_Empresa`: Exposes CRUD operations for the **Faculdade_Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculdade_Empresas
    * const faculdade_Empresas = await prisma.faculdade_Empresa.findMany()
    * ```
    */
  get faculdade_Empresa(): Prisma.Faculdade_EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pergunta`: Exposes CRUD operations for the **Pergunta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perguntas
    * const perguntas = await prisma.pergunta.findMany()
    * ```
    */
  get pergunta(): Prisma.PerguntaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opcaoResposta`: Exposes CRUD operations for the **OpcaoResposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpcaoRespostas
    * const opcaoRespostas = await prisma.opcaoResposta.findMany()
    * ```
    */
  get opcaoResposta(): Prisma.OpcaoRespostaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_Acertos`: Exposes CRUD operations for the **Usuario_Acertos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_Acertos
    * const usuario_Acertos = await prisma.usuario_Acertos.findMany()
    * ```
    */
  get usuario_Acertos(): Prisma.Usuario_AcertosDelegate<ExtArgs, ClientOptions>;
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
    Usuario: 'Usuario',
    Faculdade: 'Faculdade',
    Faculdade_Empresa: 'Faculdade_Empresa',
    Pergunta: 'Pergunta',
    OpcaoResposta: 'OpcaoResposta',
    Usuario_Acertos: 'Usuario_Acertos'
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
      modelProps: "usuario" | "faculdade" | "faculdade_Empresa" | "pergunta" | "opcaoResposta" | "usuario_Acertos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Faculdade: {
        payload: Prisma.$FaculdadePayload<ExtArgs>
        fields: Prisma.FaculdadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaculdadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaculdadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>
          }
          findFirst: {
            args: Prisma.FaculdadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaculdadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>
          }
          findMany: {
            args: Prisma.FaculdadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>[]
          }
          create: {
            args: Prisma.FaculdadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>
          }
          createMany: {
            args: Prisma.FaculdadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaculdadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>[]
          }
          delete: {
            args: Prisma.FaculdadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>
          }
          update: {
            args: Prisma.FaculdadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>
          }
          deleteMany: {
            args: Prisma.FaculdadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaculdadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaculdadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>[]
          }
          upsert: {
            args: Prisma.FaculdadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaculdadePayload>
          }
          aggregate: {
            args: Prisma.FaculdadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaculdade>
          }
          groupBy: {
            args: Prisma.FaculdadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaculdadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaculdadeCountArgs<ExtArgs>
            result: $Utils.Optional<FaculdadeCountAggregateOutputType> | number
          }
        }
      }
      Faculdade_Empresa: {
        payload: Prisma.$Faculdade_EmpresaPayload<ExtArgs>
        fields: Prisma.Faculdade_EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Faculdade_EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Faculdade_EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>
          }
          findFirst: {
            args: Prisma.Faculdade_EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Faculdade_EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>
          }
          findMany: {
            args: Prisma.Faculdade_EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>[]
          }
          create: {
            args: Prisma.Faculdade_EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>
          }
          createMany: {
            args: Prisma.Faculdade_EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Faculdade_EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>[]
          }
          delete: {
            args: Prisma.Faculdade_EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>
          }
          update: {
            args: Prisma.Faculdade_EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.Faculdade_EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Faculdade_EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Faculdade_EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.Faculdade_EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Faculdade_EmpresaPayload>
          }
          aggregate: {
            args: Prisma.Faculdade_EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaculdade_Empresa>
          }
          groupBy: {
            args: Prisma.Faculdade_EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Faculdade_EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Faculdade_EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<Faculdade_EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Pergunta: {
        payload: Prisma.$PerguntaPayload<ExtArgs>
        fields: Prisma.PerguntaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerguntaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerguntaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          findFirst: {
            args: Prisma.PerguntaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerguntaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          findMany: {
            args: Prisma.PerguntaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>[]
          }
          create: {
            args: Prisma.PerguntaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          createMany: {
            args: Prisma.PerguntaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerguntaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>[]
          }
          delete: {
            args: Prisma.PerguntaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          update: {
            args: Prisma.PerguntaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          deleteMany: {
            args: Prisma.PerguntaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerguntaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerguntaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>[]
          }
          upsert: {
            args: Prisma.PerguntaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          aggregate: {
            args: Prisma.PerguntaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePergunta>
          }
          groupBy: {
            args: Prisma.PerguntaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerguntaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerguntaCountArgs<ExtArgs>
            result: $Utils.Optional<PerguntaCountAggregateOutputType> | number
          }
        }
      }
      OpcaoResposta: {
        payload: Prisma.$OpcaoRespostaPayload<ExtArgs>
        fields: Prisma.OpcaoRespostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpcaoRespostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpcaoRespostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          findFirst: {
            args: Prisma.OpcaoRespostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpcaoRespostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          findMany: {
            args: Prisma.OpcaoRespostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>[]
          }
          create: {
            args: Prisma.OpcaoRespostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          createMany: {
            args: Prisma.OpcaoRespostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpcaoRespostaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>[]
          }
          delete: {
            args: Prisma.OpcaoRespostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          update: {
            args: Prisma.OpcaoRespostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          deleteMany: {
            args: Prisma.OpcaoRespostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpcaoRespostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpcaoRespostaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>[]
          }
          upsert: {
            args: Prisma.OpcaoRespostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          aggregate: {
            args: Prisma.OpcaoRespostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpcaoResposta>
          }
          groupBy: {
            args: Prisma.OpcaoRespostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpcaoRespostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpcaoRespostaCountArgs<ExtArgs>
            result: $Utils.Optional<OpcaoRespostaCountAggregateOutputType> | number
          }
        }
      }
      Usuario_Acertos: {
        payload: Prisma.$Usuario_AcertosPayload<ExtArgs>
        fields: Prisma.Usuario_AcertosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Usuario_AcertosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Usuario_AcertosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>
          }
          findFirst: {
            args: Prisma.Usuario_AcertosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Usuario_AcertosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>
          }
          findMany: {
            args: Prisma.Usuario_AcertosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>[]
          }
          create: {
            args: Prisma.Usuario_AcertosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>
          }
          createMany: {
            args: Prisma.Usuario_AcertosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Usuario_AcertosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>[]
          }
          delete: {
            args: Prisma.Usuario_AcertosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>
          }
          update: {
            args: Prisma.Usuario_AcertosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>
          }
          deleteMany: {
            args: Prisma.Usuario_AcertosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Usuario_AcertosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Usuario_AcertosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>[]
          }
          upsert: {
            args: Prisma.Usuario_AcertosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_AcertosPayload>
          }
          aggregate: {
            args: Prisma.Usuario_AcertosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_Acertos>
          }
          groupBy: {
            args: Prisma.Usuario_AcertosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_AcertosGroupByOutputType>[]
          }
          count: {
            args: Prisma.Usuario_AcertosCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_AcertosCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    faculdade?: FaculdadeOmit
    faculdade_Empresa?: Faculdade_EmpresaOmit
    pergunta?: PerguntaOmit
    opcaoResposta?: OpcaoRespostaOmit
    usuario_Acertos?: Usuario_AcertosOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    acertos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acertos?: boolean | UsuarioCountOutputTypeCountAcertosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAcertosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Usuario_AcertosWhereInput
  }


  /**
   * Count Type FaculdadeCountOutputType
   */

  export type FaculdadeCountOutputType = {
    usuarios: number
    faculdadesEmpresas: number
    perguntas: number
  }

  export type FaculdadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | FaculdadeCountOutputTypeCountUsuariosArgs
    faculdadesEmpresas?: boolean | FaculdadeCountOutputTypeCountFaculdadesEmpresasArgs
    perguntas?: boolean | FaculdadeCountOutputTypeCountPerguntasArgs
  }

  // Custom InputTypes
  /**
   * FaculdadeCountOutputType without action
   */
  export type FaculdadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaculdadeCountOutputType
     */
    select?: FaculdadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FaculdadeCountOutputType without action
   */
  export type FaculdadeCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * FaculdadeCountOutputType without action
   */
  export type FaculdadeCountOutputTypeCountFaculdadesEmpresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Faculdade_EmpresaWhereInput
  }

  /**
   * FaculdadeCountOutputType without action
   */
  export type FaculdadeCountOutputTypeCountPerguntasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaWhereInput
  }


  /**
   * Count Type PerguntaCountOutputType
   */

  export type PerguntaCountOutputType = {
    opcoes: number
    acertos: number
  }

  export type PerguntaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opcoes?: boolean | PerguntaCountOutputTypeCountOpcoesArgs
    acertos?: boolean | PerguntaCountOutputTypeCountAcertosArgs
  }

  // Custom InputTypes
  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCountOutputType
     */
    select?: PerguntaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeCountOpcoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcaoRespostaWhereInput
  }

  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeCountAcertosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Usuario_AcertosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: string | null
    nome: string | null
    email: string | null
    senha: string | null
    id_faculdade: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: string | null
    nome: string | null
    email: string | null
    senha: string | null
    id_faculdade: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nome: number
    email: number
    senha: number
    id_faculdade: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    id_faculdade?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    id_faculdade?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    id_faculdade?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: string
    nome: string
    email: string
    senha: string
    id_faculdade: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    id_faculdade?: boolean
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
    acertos?: boolean | Usuario$acertosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    id_faculdade?: boolean
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    id_faculdade?: boolean
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    id_faculdade?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nome" | "email" | "senha" | "id_faculdade", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
    acertos?: boolean | Usuario$acertosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      faculdade: Prisma.$FaculdadePayload<ExtArgs>
      acertos: Prisma.$Usuario_AcertosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: string
      nome: string
      email: string
      senha: string
      id_faculdade: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculdade<T extends FaculdadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FaculdadeDefaultArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    acertos<T extends Usuario$acertosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$acertosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly id_faculdade: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.acertos
   */
  export type Usuario$acertosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    where?: Usuario_AcertosWhereInput
    orderBy?: Usuario_AcertosOrderByWithRelationInput | Usuario_AcertosOrderByWithRelationInput[]
    cursor?: Usuario_AcertosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_AcertosScalarFieldEnum | Usuario_AcertosScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Faculdade
   */

  export type AggregateFaculdade = {
    _count: FaculdadeCountAggregateOutputType | null
    _min: FaculdadeMinAggregateOutputType | null
    _max: FaculdadeMaxAggregateOutputType | null
  }

  export type FaculdadeMinAggregateOutputType = {
    id_faculdade: string | null
    nome: string | null
    endereco: string | null
  }

  export type FaculdadeMaxAggregateOutputType = {
    id_faculdade: string | null
    nome: string | null
    endereco: string | null
  }

  export type FaculdadeCountAggregateOutputType = {
    id_faculdade: number
    nome: number
    endereco: number
    _all: number
  }


  export type FaculdadeMinAggregateInputType = {
    id_faculdade?: true
    nome?: true
    endereco?: true
  }

  export type FaculdadeMaxAggregateInputType = {
    id_faculdade?: true
    nome?: true
    endereco?: true
  }

  export type FaculdadeCountAggregateInputType = {
    id_faculdade?: true
    nome?: true
    endereco?: true
    _all?: true
  }

  export type FaculdadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculdade to aggregate.
     */
    where?: FaculdadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculdades to fetch.
     */
    orderBy?: FaculdadeOrderByWithRelationInput | FaculdadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaculdadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculdades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculdades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faculdades
    **/
    _count?: true | FaculdadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaculdadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaculdadeMaxAggregateInputType
  }

  export type GetFaculdadeAggregateType<T extends FaculdadeAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculdade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculdade[P]>
      : GetScalarType<T[P], AggregateFaculdade[P]>
  }




  export type FaculdadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaculdadeWhereInput
    orderBy?: FaculdadeOrderByWithAggregationInput | FaculdadeOrderByWithAggregationInput[]
    by: FaculdadeScalarFieldEnum[] | FaculdadeScalarFieldEnum
    having?: FaculdadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaculdadeCountAggregateInputType | true
    _min?: FaculdadeMinAggregateInputType
    _max?: FaculdadeMaxAggregateInputType
  }

  export type FaculdadeGroupByOutputType = {
    id_faculdade: string
    nome: string
    endereco: string
    _count: FaculdadeCountAggregateOutputType | null
    _min: FaculdadeMinAggregateOutputType | null
    _max: FaculdadeMaxAggregateOutputType | null
  }

  type GetFaculdadeGroupByPayload<T extends FaculdadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaculdadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaculdadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaculdadeGroupByOutputType[P]>
            : GetScalarType<T[P], FaculdadeGroupByOutputType[P]>
        }
      >
    >


  export type FaculdadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_faculdade?: boolean
    nome?: boolean
    endereco?: boolean
    usuarios?: boolean | Faculdade$usuariosArgs<ExtArgs>
    faculdadesEmpresas?: boolean | Faculdade$faculdadesEmpresasArgs<ExtArgs>
    perguntas?: boolean | Faculdade$perguntasArgs<ExtArgs>
    _count?: boolean | FaculdadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculdade"]>

  export type FaculdadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_faculdade?: boolean
    nome?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["faculdade"]>

  export type FaculdadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_faculdade?: boolean
    nome?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["faculdade"]>

  export type FaculdadeSelectScalar = {
    id_faculdade?: boolean
    nome?: boolean
    endereco?: boolean
  }

  export type FaculdadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_faculdade" | "nome" | "endereco", ExtArgs["result"]["faculdade"]>
  export type FaculdadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Faculdade$usuariosArgs<ExtArgs>
    faculdadesEmpresas?: boolean | Faculdade$faculdadesEmpresasArgs<ExtArgs>
    perguntas?: boolean | Faculdade$perguntasArgs<ExtArgs>
    _count?: boolean | FaculdadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FaculdadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FaculdadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FaculdadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faculdade"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      faculdadesEmpresas: Prisma.$Faculdade_EmpresaPayload<ExtArgs>[]
      perguntas: Prisma.$PerguntaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_faculdade: string
      nome: string
      endereco: string
    }, ExtArgs["result"]["faculdade"]>
    composites: {}
  }

  type FaculdadeGetPayload<S extends boolean | null | undefined | FaculdadeDefaultArgs> = $Result.GetResult<Prisma.$FaculdadePayload, S>

  type FaculdadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaculdadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaculdadeCountAggregateInputType | true
    }

  export interface FaculdadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faculdade'], meta: { name: 'Faculdade' } }
    /**
     * Find zero or one Faculdade that matches the filter.
     * @param {FaculdadeFindUniqueArgs} args - Arguments to find a Faculdade
     * @example
     * // Get one Faculdade
     * const faculdade = await prisma.faculdade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaculdadeFindUniqueArgs>(args: SelectSubset<T, FaculdadeFindUniqueArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faculdade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaculdadeFindUniqueOrThrowArgs} args - Arguments to find a Faculdade
     * @example
     * // Get one Faculdade
     * const faculdade = await prisma.faculdade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaculdadeFindUniqueOrThrowArgs>(args: SelectSubset<T, FaculdadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculdade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaculdadeFindFirstArgs} args - Arguments to find a Faculdade
     * @example
     * // Get one Faculdade
     * const faculdade = await prisma.faculdade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaculdadeFindFirstArgs>(args?: SelectSubset<T, FaculdadeFindFirstArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculdade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaculdadeFindFirstOrThrowArgs} args - Arguments to find a Faculdade
     * @example
     * // Get one Faculdade
     * const faculdade = await prisma.faculdade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaculdadeFindFirstOrThrowArgs>(args?: SelectSubset<T, FaculdadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faculdades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaculdadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculdades
     * const faculdades = await prisma.faculdade.findMany()
     * 
     * // Get first 10 Faculdades
     * const faculdades = await prisma.faculdade.findMany({ take: 10 })
     * 
     * // Only select the `id_faculdade`
     * const faculdadeWithId_faculdadeOnly = await prisma.faculdade.findMany({ select: { id_faculdade: true } })
     * 
     */
    findMany<T extends FaculdadeFindManyArgs>(args?: SelectSubset<T, FaculdadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faculdade.
     * @param {FaculdadeCreateArgs} args - Arguments to create a Faculdade.
     * @example
     * // Create one Faculdade
     * const Faculdade = await prisma.faculdade.create({
     *   data: {
     *     // ... data to create a Faculdade
     *   }
     * })
     * 
     */
    create<T extends FaculdadeCreateArgs>(args: SelectSubset<T, FaculdadeCreateArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faculdades.
     * @param {FaculdadeCreateManyArgs} args - Arguments to create many Faculdades.
     * @example
     * // Create many Faculdades
     * const faculdade = await prisma.faculdade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaculdadeCreateManyArgs>(args?: SelectSubset<T, FaculdadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faculdades and returns the data saved in the database.
     * @param {FaculdadeCreateManyAndReturnArgs} args - Arguments to create many Faculdades.
     * @example
     * // Create many Faculdades
     * const faculdade = await prisma.faculdade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faculdades and only return the `id_faculdade`
     * const faculdadeWithId_faculdadeOnly = await prisma.faculdade.createManyAndReturn({
     *   select: { id_faculdade: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaculdadeCreateManyAndReturnArgs>(args?: SelectSubset<T, FaculdadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faculdade.
     * @param {FaculdadeDeleteArgs} args - Arguments to delete one Faculdade.
     * @example
     * // Delete one Faculdade
     * const Faculdade = await prisma.faculdade.delete({
     *   where: {
     *     // ... filter to delete one Faculdade
     *   }
     * })
     * 
     */
    delete<T extends FaculdadeDeleteArgs>(args: SelectSubset<T, FaculdadeDeleteArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faculdade.
     * @param {FaculdadeUpdateArgs} args - Arguments to update one Faculdade.
     * @example
     * // Update one Faculdade
     * const faculdade = await prisma.faculdade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaculdadeUpdateArgs>(args: SelectSubset<T, FaculdadeUpdateArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faculdades.
     * @param {FaculdadeDeleteManyArgs} args - Arguments to filter Faculdades to delete.
     * @example
     * // Delete a few Faculdades
     * const { count } = await prisma.faculdade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaculdadeDeleteManyArgs>(args?: SelectSubset<T, FaculdadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculdades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaculdadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculdades
     * const faculdade = await prisma.faculdade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaculdadeUpdateManyArgs>(args: SelectSubset<T, FaculdadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculdades and returns the data updated in the database.
     * @param {FaculdadeUpdateManyAndReturnArgs} args - Arguments to update many Faculdades.
     * @example
     * // Update many Faculdades
     * const faculdade = await prisma.faculdade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faculdades and only return the `id_faculdade`
     * const faculdadeWithId_faculdadeOnly = await prisma.faculdade.updateManyAndReturn({
     *   select: { id_faculdade: true },
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
    updateManyAndReturn<T extends FaculdadeUpdateManyAndReturnArgs>(args: SelectSubset<T, FaculdadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faculdade.
     * @param {FaculdadeUpsertArgs} args - Arguments to update or create a Faculdade.
     * @example
     * // Update or create a Faculdade
     * const faculdade = await prisma.faculdade.upsert({
     *   create: {
     *     // ... data to create a Faculdade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculdade we want to update
     *   }
     * })
     */
    upsert<T extends FaculdadeUpsertArgs>(args: SelectSubset<T, FaculdadeUpsertArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faculdades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaculdadeCountArgs} args - Arguments to filter Faculdades to count.
     * @example
     * // Count the number of Faculdades
     * const count = await prisma.faculdade.count({
     *   where: {
     *     // ... the filter for the Faculdades we want to count
     *   }
     * })
    **/
    count<T extends FaculdadeCountArgs>(
      args?: Subset<T, FaculdadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaculdadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculdade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaculdadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaculdadeAggregateArgs>(args: Subset<T, FaculdadeAggregateArgs>): Prisma.PrismaPromise<GetFaculdadeAggregateType<T>>

    /**
     * Group by Faculdade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaculdadeGroupByArgs} args - Group by arguments.
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
      T extends FaculdadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaculdadeGroupByArgs['orderBy'] }
        : { orderBy?: FaculdadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FaculdadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaculdadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faculdade model
   */
  readonly fields: FaculdadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faculdade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaculdadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Faculdade$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Faculdade$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faculdadesEmpresas<T extends Faculdade$faculdadesEmpresasArgs<ExtArgs> = {}>(args?: Subset<T, Faculdade$faculdadesEmpresasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    perguntas<T extends Faculdade$perguntasArgs<ExtArgs> = {}>(args?: Subset<T, Faculdade$perguntasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Faculdade model
   */
  interface FaculdadeFieldRefs {
    readonly id_faculdade: FieldRef<"Faculdade", 'String'>
    readonly nome: FieldRef<"Faculdade", 'String'>
    readonly endereco: FieldRef<"Faculdade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Faculdade findUnique
   */
  export type FaculdadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade to fetch.
     */
    where: FaculdadeWhereUniqueInput
  }

  /**
   * Faculdade findUniqueOrThrow
   */
  export type FaculdadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade to fetch.
     */
    where: FaculdadeWhereUniqueInput
  }

  /**
   * Faculdade findFirst
   */
  export type FaculdadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade to fetch.
     */
    where?: FaculdadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculdades to fetch.
     */
    orderBy?: FaculdadeOrderByWithRelationInput | FaculdadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculdades.
     */
    cursor?: FaculdadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculdades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculdades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculdades.
     */
    distinct?: FaculdadeScalarFieldEnum | FaculdadeScalarFieldEnum[]
  }

  /**
   * Faculdade findFirstOrThrow
   */
  export type FaculdadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade to fetch.
     */
    where?: FaculdadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculdades to fetch.
     */
    orderBy?: FaculdadeOrderByWithRelationInput | FaculdadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculdades.
     */
    cursor?: FaculdadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculdades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculdades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculdades.
     */
    distinct?: FaculdadeScalarFieldEnum | FaculdadeScalarFieldEnum[]
  }

  /**
   * Faculdade findMany
   */
  export type FaculdadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * Filter, which Faculdades to fetch.
     */
    where?: FaculdadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculdades to fetch.
     */
    orderBy?: FaculdadeOrderByWithRelationInput | FaculdadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faculdades.
     */
    cursor?: FaculdadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculdades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculdades.
     */
    skip?: number
    distinct?: FaculdadeScalarFieldEnum | FaculdadeScalarFieldEnum[]
  }

  /**
   * Faculdade create
   */
  export type FaculdadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Faculdade.
     */
    data: XOR<FaculdadeCreateInput, FaculdadeUncheckedCreateInput>
  }

  /**
   * Faculdade createMany
   */
  export type FaculdadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faculdades.
     */
    data: FaculdadeCreateManyInput | FaculdadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faculdade createManyAndReturn
   */
  export type FaculdadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * The data used to create many Faculdades.
     */
    data: FaculdadeCreateManyInput | FaculdadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faculdade update
   */
  export type FaculdadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Faculdade.
     */
    data: XOR<FaculdadeUpdateInput, FaculdadeUncheckedUpdateInput>
    /**
     * Choose, which Faculdade to update.
     */
    where: FaculdadeWhereUniqueInput
  }

  /**
   * Faculdade updateMany
   */
  export type FaculdadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faculdades.
     */
    data: XOR<FaculdadeUpdateManyMutationInput, FaculdadeUncheckedUpdateManyInput>
    /**
     * Filter which Faculdades to update
     */
    where?: FaculdadeWhereInput
    /**
     * Limit how many Faculdades to update.
     */
    limit?: number
  }

  /**
   * Faculdade updateManyAndReturn
   */
  export type FaculdadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * The data used to update Faculdades.
     */
    data: XOR<FaculdadeUpdateManyMutationInput, FaculdadeUncheckedUpdateManyInput>
    /**
     * Filter which Faculdades to update
     */
    where?: FaculdadeWhereInput
    /**
     * Limit how many Faculdades to update.
     */
    limit?: number
  }

  /**
   * Faculdade upsert
   */
  export type FaculdadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Faculdade to update in case it exists.
     */
    where: FaculdadeWhereUniqueInput
    /**
     * In case the Faculdade found by the `where` argument doesn't exist, create a new Faculdade with this data.
     */
    create: XOR<FaculdadeCreateInput, FaculdadeUncheckedCreateInput>
    /**
     * In case the Faculdade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaculdadeUpdateInput, FaculdadeUncheckedUpdateInput>
  }

  /**
   * Faculdade delete
   */
  export type FaculdadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    /**
     * Filter which Faculdade to delete.
     */
    where: FaculdadeWhereUniqueInput
  }

  /**
   * Faculdade deleteMany
   */
  export type FaculdadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculdades to delete
     */
    where?: FaculdadeWhereInput
    /**
     * Limit how many Faculdades to delete.
     */
    limit?: number
  }

  /**
   * Faculdade.usuarios
   */
  export type Faculdade$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Faculdade.faculdadesEmpresas
   */
  export type Faculdade$faculdadesEmpresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    where?: Faculdade_EmpresaWhereInput
    orderBy?: Faculdade_EmpresaOrderByWithRelationInput | Faculdade_EmpresaOrderByWithRelationInput[]
    cursor?: Faculdade_EmpresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Faculdade_EmpresaScalarFieldEnum | Faculdade_EmpresaScalarFieldEnum[]
  }

  /**
   * Faculdade.perguntas
   */
  export type Faculdade$perguntasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    where?: PerguntaWhereInput
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    cursor?: PerguntaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }

  /**
   * Faculdade without action
   */
  export type FaculdadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
  }


  /**
   * Model Faculdade_Empresa
   */

  export type AggregateFaculdade_Empresa = {
    _count: Faculdade_EmpresaCountAggregateOutputType | null
    _min: Faculdade_EmpresaMinAggregateOutputType | null
    _max: Faculdade_EmpresaMaxAggregateOutputType | null
  }

  export type Faculdade_EmpresaMinAggregateOutputType = {
    id_faculdade_: string | null
    id_faculdade: string | null
    id_empresa: string | null
  }

  export type Faculdade_EmpresaMaxAggregateOutputType = {
    id_faculdade_: string | null
    id_faculdade: string | null
    id_empresa: string | null
  }

  export type Faculdade_EmpresaCountAggregateOutputType = {
    id_faculdade_: number
    id_faculdade: number
    id_empresa: number
    _all: number
  }


  export type Faculdade_EmpresaMinAggregateInputType = {
    id_faculdade_?: true
    id_faculdade?: true
    id_empresa?: true
  }

  export type Faculdade_EmpresaMaxAggregateInputType = {
    id_faculdade_?: true
    id_faculdade?: true
    id_empresa?: true
  }

  export type Faculdade_EmpresaCountAggregateInputType = {
    id_faculdade_?: true
    id_faculdade?: true
    id_empresa?: true
    _all?: true
  }

  export type Faculdade_EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculdade_Empresa to aggregate.
     */
    where?: Faculdade_EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculdade_Empresas to fetch.
     */
    orderBy?: Faculdade_EmpresaOrderByWithRelationInput | Faculdade_EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Faculdade_EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculdade_Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculdade_Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faculdade_Empresas
    **/
    _count?: true | Faculdade_EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Faculdade_EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Faculdade_EmpresaMaxAggregateInputType
  }

  export type GetFaculdade_EmpresaAggregateType<T extends Faculdade_EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculdade_Empresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculdade_Empresa[P]>
      : GetScalarType<T[P], AggregateFaculdade_Empresa[P]>
  }




  export type Faculdade_EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Faculdade_EmpresaWhereInput
    orderBy?: Faculdade_EmpresaOrderByWithAggregationInput | Faculdade_EmpresaOrderByWithAggregationInput[]
    by: Faculdade_EmpresaScalarFieldEnum[] | Faculdade_EmpresaScalarFieldEnum
    having?: Faculdade_EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Faculdade_EmpresaCountAggregateInputType | true
    _min?: Faculdade_EmpresaMinAggregateInputType
    _max?: Faculdade_EmpresaMaxAggregateInputType
  }

  export type Faculdade_EmpresaGroupByOutputType = {
    id_faculdade_: string
    id_faculdade: string
    id_empresa: string
    _count: Faculdade_EmpresaCountAggregateOutputType | null
    _min: Faculdade_EmpresaMinAggregateOutputType | null
    _max: Faculdade_EmpresaMaxAggregateOutputType | null
  }

  type GetFaculdade_EmpresaGroupByPayload<T extends Faculdade_EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Faculdade_EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Faculdade_EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Faculdade_EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], Faculdade_EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type Faculdade_EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_faculdade_?: boolean
    id_faculdade?: boolean
    id_empresa?: boolean
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculdade_Empresa"]>

  export type Faculdade_EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_faculdade_?: boolean
    id_faculdade?: boolean
    id_empresa?: boolean
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculdade_Empresa"]>

  export type Faculdade_EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_faculdade_?: boolean
    id_faculdade?: boolean
    id_empresa?: boolean
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculdade_Empresa"]>

  export type Faculdade_EmpresaSelectScalar = {
    id_faculdade_?: boolean
    id_faculdade?: boolean
    id_empresa?: boolean
  }

  export type Faculdade_EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_faculdade_" | "id_faculdade" | "id_empresa", ExtArgs["result"]["faculdade_Empresa"]>
  export type Faculdade_EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }
  export type Faculdade_EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }
  export type Faculdade_EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | FaculdadeDefaultArgs<ExtArgs>
  }

  export type $Faculdade_EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faculdade_Empresa"
    objects: {
      faculdade: Prisma.$FaculdadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_faculdade_: string
      id_faculdade: string
      id_empresa: string
    }, ExtArgs["result"]["faculdade_Empresa"]>
    composites: {}
  }

  type Faculdade_EmpresaGetPayload<S extends boolean | null | undefined | Faculdade_EmpresaDefaultArgs> = $Result.GetResult<Prisma.$Faculdade_EmpresaPayload, S>

  type Faculdade_EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Faculdade_EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Faculdade_EmpresaCountAggregateInputType | true
    }

  export interface Faculdade_EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faculdade_Empresa'], meta: { name: 'Faculdade_Empresa' } }
    /**
     * Find zero or one Faculdade_Empresa that matches the filter.
     * @param {Faculdade_EmpresaFindUniqueArgs} args - Arguments to find a Faculdade_Empresa
     * @example
     * // Get one Faculdade_Empresa
     * const faculdade_Empresa = await prisma.faculdade_Empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Faculdade_EmpresaFindUniqueArgs>(args: SelectSubset<T, Faculdade_EmpresaFindUniqueArgs<ExtArgs>>): Prisma__Faculdade_EmpresaClient<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faculdade_Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Faculdade_EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Faculdade_Empresa
     * @example
     * // Get one Faculdade_Empresa
     * const faculdade_Empresa = await prisma.faculdade_Empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Faculdade_EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, Faculdade_EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Faculdade_EmpresaClient<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculdade_Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Faculdade_EmpresaFindFirstArgs} args - Arguments to find a Faculdade_Empresa
     * @example
     * // Get one Faculdade_Empresa
     * const faculdade_Empresa = await prisma.faculdade_Empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Faculdade_EmpresaFindFirstArgs>(args?: SelectSubset<T, Faculdade_EmpresaFindFirstArgs<ExtArgs>>): Prisma__Faculdade_EmpresaClient<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculdade_Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Faculdade_EmpresaFindFirstOrThrowArgs} args - Arguments to find a Faculdade_Empresa
     * @example
     * // Get one Faculdade_Empresa
     * const faculdade_Empresa = await prisma.faculdade_Empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Faculdade_EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, Faculdade_EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Faculdade_EmpresaClient<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faculdade_Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Faculdade_EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculdade_Empresas
     * const faculdade_Empresas = await prisma.faculdade_Empresa.findMany()
     * 
     * // Get first 10 Faculdade_Empresas
     * const faculdade_Empresas = await prisma.faculdade_Empresa.findMany({ take: 10 })
     * 
     * // Only select the `id_faculdade_`
     * const faculdade_EmpresaWithId_faculdade_Only = await prisma.faculdade_Empresa.findMany({ select: { id_faculdade_: true } })
     * 
     */
    findMany<T extends Faculdade_EmpresaFindManyArgs>(args?: SelectSubset<T, Faculdade_EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faculdade_Empresa.
     * @param {Faculdade_EmpresaCreateArgs} args - Arguments to create a Faculdade_Empresa.
     * @example
     * // Create one Faculdade_Empresa
     * const Faculdade_Empresa = await prisma.faculdade_Empresa.create({
     *   data: {
     *     // ... data to create a Faculdade_Empresa
     *   }
     * })
     * 
     */
    create<T extends Faculdade_EmpresaCreateArgs>(args: SelectSubset<T, Faculdade_EmpresaCreateArgs<ExtArgs>>): Prisma__Faculdade_EmpresaClient<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faculdade_Empresas.
     * @param {Faculdade_EmpresaCreateManyArgs} args - Arguments to create many Faculdade_Empresas.
     * @example
     * // Create many Faculdade_Empresas
     * const faculdade_Empresa = await prisma.faculdade_Empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Faculdade_EmpresaCreateManyArgs>(args?: SelectSubset<T, Faculdade_EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faculdade_Empresas and returns the data saved in the database.
     * @param {Faculdade_EmpresaCreateManyAndReturnArgs} args - Arguments to create many Faculdade_Empresas.
     * @example
     * // Create many Faculdade_Empresas
     * const faculdade_Empresa = await prisma.faculdade_Empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faculdade_Empresas and only return the `id_faculdade_`
     * const faculdade_EmpresaWithId_faculdade_Only = await prisma.faculdade_Empresa.createManyAndReturn({
     *   select: { id_faculdade_: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Faculdade_EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, Faculdade_EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faculdade_Empresa.
     * @param {Faculdade_EmpresaDeleteArgs} args - Arguments to delete one Faculdade_Empresa.
     * @example
     * // Delete one Faculdade_Empresa
     * const Faculdade_Empresa = await prisma.faculdade_Empresa.delete({
     *   where: {
     *     // ... filter to delete one Faculdade_Empresa
     *   }
     * })
     * 
     */
    delete<T extends Faculdade_EmpresaDeleteArgs>(args: SelectSubset<T, Faculdade_EmpresaDeleteArgs<ExtArgs>>): Prisma__Faculdade_EmpresaClient<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faculdade_Empresa.
     * @param {Faculdade_EmpresaUpdateArgs} args - Arguments to update one Faculdade_Empresa.
     * @example
     * // Update one Faculdade_Empresa
     * const faculdade_Empresa = await prisma.faculdade_Empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Faculdade_EmpresaUpdateArgs>(args: SelectSubset<T, Faculdade_EmpresaUpdateArgs<ExtArgs>>): Prisma__Faculdade_EmpresaClient<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faculdade_Empresas.
     * @param {Faculdade_EmpresaDeleteManyArgs} args - Arguments to filter Faculdade_Empresas to delete.
     * @example
     * // Delete a few Faculdade_Empresas
     * const { count } = await prisma.faculdade_Empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Faculdade_EmpresaDeleteManyArgs>(args?: SelectSubset<T, Faculdade_EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculdade_Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Faculdade_EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculdade_Empresas
     * const faculdade_Empresa = await prisma.faculdade_Empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Faculdade_EmpresaUpdateManyArgs>(args: SelectSubset<T, Faculdade_EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculdade_Empresas and returns the data updated in the database.
     * @param {Faculdade_EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Faculdade_Empresas.
     * @example
     * // Update many Faculdade_Empresas
     * const faculdade_Empresa = await prisma.faculdade_Empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faculdade_Empresas and only return the `id_faculdade_`
     * const faculdade_EmpresaWithId_faculdade_Only = await prisma.faculdade_Empresa.updateManyAndReturn({
     *   select: { id_faculdade_: true },
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
    updateManyAndReturn<T extends Faculdade_EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, Faculdade_EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faculdade_Empresa.
     * @param {Faculdade_EmpresaUpsertArgs} args - Arguments to update or create a Faculdade_Empresa.
     * @example
     * // Update or create a Faculdade_Empresa
     * const faculdade_Empresa = await prisma.faculdade_Empresa.upsert({
     *   create: {
     *     // ... data to create a Faculdade_Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculdade_Empresa we want to update
     *   }
     * })
     */
    upsert<T extends Faculdade_EmpresaUpsertArgs>(args: SelectSubset<T, Faculdade_EmpresaUpsertArgs<ExtArgs>>): Prisma__Faculdade_EmpresaClient<$Result.GetResult<Prisma.$Faculdade_EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faculdade_Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Faculdade_EmpresaCountArgs} args - Arguments to filter Faculdade_Empresas to count.
     * @example
     * // Count the number of Faculdade_Empresas
     * const count = await prisma.faculdade_Empresa.count({
     *   where: {
     *     // ... the filter for the Faculdade_Empresas we want to count
     *   }
     * })
    **/
    count<T extends Faculdade_EmpresaCountArgs>(
      args?: Subset<T, Faculdade_EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Faculdade_EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculdade_Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Faculdade_EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Faculdade_EmpresaAggregateArgs>(args: Subset<T, Faculdade_EmpresaAggregateArgs>): Prisma.PrismaPromise<GetFaculdade_EmpresaAggregateType<T>>

    /**
     * Group by Faculdade_Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Faculdade_EmpresaGroupByArgs} args - Group by arguments.
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
      T extends Faculdade_EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Faculdade_EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: Faculdade_EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Faculdade_EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaculdade_EmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faculdade_Empresa model
   */
  readonly fields: Faculdade_EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faculdade_Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Faculdade_EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculdade<T extends FaculdadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FaculdadeDefaultArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Faculdade_Empresa model
   */
  interface Faculdade_EmpresaFieldRefs {
    readonly id_faculdade_: FieldRef<"Faculdade_Empresa", 'String'>
    readonly id_faculdade: FieldRef<"Faculdade_Empresa", 'String'>
    readonly id_empresa: FieldRef<"Faculdade_Empresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Faculdade_Empresa findUnique
   */
  export type Faculdade_EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade_Empresa to fetch.
     */
    where: Faculdade_EmpresaWhereUniqueInput
  }

  /**
   * Faculdade_Empresa findUniqueOrThrow
   */
  export type Faculdade_EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade_Empresa to fetch.
     */
    where: Faculdade_EmpresaWhereUniqueInput
  }

  /**
   * Faculdade_Empresa findFirst
   */
  export type Faculdade_EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade_Empresa to fetch.
     */
    where?: Faculdade_EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculdade_Empresas to fetch.
     */
    orderBy?: Faculdade_EmpresaOrderByWithRelationInput | Faculdade_EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculdade_Empresas.
     */
    cursor?: Faculdade_EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculdade_Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculdade_Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculdade_Empresas.
     */
    distinct?: Faculdade_EmpresaScalarFieldEnum | Faculdade_EmpresaScalarFieldEnum[]
  }

  /**
   * Faculdade_Empresa findFirstOrThrow
   */
  export type Faculdade_EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade_Empresa to fetch.
     */
    where?: Faculdade_EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculdade_Empresas to fetch.
     */
    orderBy?: Faculdade_EmpresaOrderByWithRelationInput | Faculdade_EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculdade_Empresas.
     */
    cursor?: Faculdade_EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculdade_Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculdade_Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculdade_Empresas.
     */
    distinct?: Faculdade_EmpresaScalarFieldEnum | Faculdade_EmpresaScalarFieldEnum[]
  }

  /**
   * Faculdade_Empresa findMany
   */
  export type Faculdade_EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Faculdade_Empresas to fetch.
     */
    where?: Faculdade_EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculdade_Empresas to fetch.
     */
    orderBy?: Faculdade_EmpresaOrderByWithRelationInput | Faculdade_EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faculdade_Empresas.
     */
    cursor?: Faculdade_EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculdade_Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculdade_Empresas.
     */
    skip?: number
    distinct?: Faculdade_EmpresaScalarFieldEnum | Faculdade_EmpresaScalarFieldEnum[]
  }

  /**
   * Faculdade_Empresa create
   */
  export type Faculdade_EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Faculdade_Empresa.
     */
    data: XOR<Faculdade_EmpresaCreateInput, Faculdade_EmpresaUncheckedCreateInput>
  }

  /**
   * Faculdade_Empresa createMany
   */
  export type Faculdade_EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faculdade_Empresas.
     */
    data: Faculdade_EmpresaCreateManyInput | Faculdade_EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faculdade_Empresa createManyAndReturn
   */
  export type Faculdade_EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Faculdade_Empresas.
     */
    data: Faculdade_EmpresaCreateManyInput | Faculdade_EmpresaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Faculdade_Empresa update
   */
  export type Faculdade_EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Faculdade_Empresa.
     */
    data: XOR<Faculdade_EmpresaUpdateInput, Faculdade_EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Faculdade_Empresa to update.
     */
    where: Faculdade_EmpresaWhereUniqueInput
  }

  /**
   * Faculdade_Empresa updateMany
   */
  export type Faculdade_EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faculdade_Empresas.
     */
    data: XOR<Faculdade_EmpresaUpdateManyMutationInput, Faculdade_EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Faculdade_Empresas to update
     */
    where?: Faculdade_EmpresaWhereInput
    /**
     * Limit how many Faculdade_Empresas to update.
     */
    limit?: number
  }

  /**
   * Faculdade_Empresa updateManyAndReturn
   */
  export type Faculdade_EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Faculdade_Empresas.
     */
    data: XOR<Faculdade_EmpresaUpdateManyMutationInput, Faculdade_EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Faculdade_Empresas to update
     */
    where?: Faculdade_EmpresaWhereInput
    /**
     * Limit how many Faculdade_Empresas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Faculdade_Empresa upsert
   */
  export type Faculdade_EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Faculdade_Empresa to update in case it exists.
     */
    where: Faculdade_EmpresaWhereUniqueInput
    /**
     * In case the Faculdade_Empresa found by the `where` argument doesn't exist, create a new Faculdade_Empresa with this data.
     */
    create: XOR<Faculdade_EmpresaCreateInput, Faculdade_EmpresaUncheckedCreateInput>
    /**
     * In case the Faculdade_Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Faculdade_EmpresaUpdateInput, Faculdade_EmpresaUncheckedUpdateInput>
  }

  /**
   * Faculdade_Empresa delete
   */
  export type Faculdade_EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Faculdade_Empresa to delete.
     */
    where: Faculdade_EmpresaWhereUniqueInput
  }

  /**
   * Faculdade_Empresa deleteMany
   */
  export type Faculdade_EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculdade_Empresas to delete
     */
    where?: Faculdade_EmpresaWhereInput
    /**
     * Limit how many Faculdade_Empresas to delete.
     */
    limit?: number
  }

  /**
   * Faculdade_Empresa without action
   */
  export type Faculdade_EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade_Empresa
     */
    select?: Faculdade_EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade_Empresa
     */
    omit?: Faculdade_EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Faculdade_EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Pergunta
   */

  export type AggregatePergunta = {
    _count: PerguntaCountAggregateOutputType | null
    _min: PerguntaMinAggregateOutputType | null
    _max: PerguntaMaxAggregateOutputType | null
  }

  export type PerguntaMinAggregateOutputType = {
    id_pergunta: string | null
    id_faculdade: string | null
    enunciado: string | null
    data_criação: Date | null
  }

  export type PerguntaMaxAggregateOutputType = {
    id_pergunta: string | null
    id_faculdade: string | null
    enunciado: string | null
    data_criação: Date | null
  }

  export type PerguntaCountAggregateOutputType = {
    id_pergunta: number
    id_faculdade: number
    enunciado: number
    data_criação: number
    _all: number
  }


  export type PerguntaMinAggregateInputType = {
    id_pergunta?: true
    id_faculdade?: true
    enunciado?: true
    data_criação?: true
  }

  export type PerguntaMaxAggregateInputType = {
    id_pergunta?: true
    id_faculdade?: true
    enunciado?: true
    data_criação?: true
  }

  export type PerguntaCountAggregateInputType = {
    id_pergunta?: true
    id_faculdade?: true
    enunciado?: true
    data_criação?: true
    _all?: true
  }

  export type PerguntaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pergunta to aggregate.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perguntas
    **/
    _count?: true | PerguntaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerguntaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerguntaMaxAggregateInputType
  }

  export type GetPerguntaAggregateType<T extends PerguntaAggregateArgs> = {
        [P in keyof T & keyof AggregatePergunta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePergunta[P]>
      : GetScalarType<T[P], AggregatePergunta[P]>
  }




  export type PerguntaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaWhereInput
    orderBy?: PerguntaOrderByWithAggregationInput | PerguntaOrderByWithAggregationInput[]
    by: PerguntaScalarFieldEnum[] | PerguntaScalarFieldEnum
    having?: PerguntaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerguntaCountAggregateInputType | true
    _min?: PerguntaMinAggregateInputType
    _max?: PerguntaMaxAggregateInputType
  }

  export type PerguntaGroupByOutputType = {
    id_pergunta: string
    id_faculdade: string
    enunciado: string
    data_criação: Date
    _count: PerguntaCountAggregateOutputType | null
    _min: PerguntaMinAggregateOutputType | null
    _max: PerguntaMaxAggregateOutputType | null
  }

  type GetPerguntaGroupByPayload<T extends PerguntaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerguntaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerguntaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerguntaGroupByOutputType[P]>
            : GetScalarType<T[P], PerguntaGroupByOutputType[P]>
        }
      >
    >


  export type PerguntaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pergunta?: boolean
    id_faculdade?: boolean
    enunciado?: boolean
    data_criação?: boolean
    opcoes?: boolean | Pergunta$opcoesArgs<ExtArgs>
    acertos?: boolean | Pergunta$acertosArgs<ExtArgs>
    faculdade?: boolean | Pergunta$faculdadeArgs<ExtArgs>
    _count?: boolean | PerguntaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pergunta"]>

  export type PerguntaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pergunta?: boolean
    id_faculdade?: boolean
    enunciado?: boolean
    data_criação?: boolean
    faculdade?: boolean | Pergunta$faculdadeArgs<ExtArgs>
  }, ExtArgs["result"]["pergunta"]>

  export type PerguntaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pergunta?: boolean
    id_faculdade?: boolean
    enunciado?: boolean
    data_criação?: boolean
    faculdade?: boolean | Pergunta$faculdadeArgs<ExtArgs>
  }, ExtArgs["result"]["pergunta"]>

  export type PerguntaSelectScalar = {
    id_pergunta?: boolean
    id_faculdade?: boolean
    enunciado?: boolean
    data_criação?: boolean
  }

  export type PerguntaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pergunta" | "id_faculdade" | "enunciado" | "data_criação", ExtArgs["result"]["pergunta"]>
  export type PerguntaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opcoes?: boolean | Pergunta$opcoesArgs<ExtArgs>
    acertos?: boolean | Pergunta$acertosArgs<ExtArgs>
    faculdade?: boolean | Pergunta$faculdadeArgs<ExtArgs>
    _count?: boolean | PerguntaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PerguntaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | Pergunta$faculdadeArgs<ExtArgs>
  }
  export type PerguntaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | Pergunta$faculdadeArgs<ExtArgs>
  }

  export type $PerguntaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pergunta"
    objects: {
      opcoes: Prisma.$OpcaoRespostaPayload<ExtArgs>[]
      acertos: Prisma.$Usuario_AcertosPayload<ExtArgs>[]
      faculdade: Prisma.$FaculdadePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pergunta: string
      id_faculdade: string
      enunciado: string
      data_criação: Date
    }, ExtArgs["result"]["pergunta"]>
    composites: {}
  }

  type PerguntaGetPayload<S extends boolean | null | undefined | PerguntaDefaultArgs> = $Result.GetResult<Prisma.$PerguntaPayload, S>

  type PerguntaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerguntaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerguntaCountAggregateInputType | true
    }

  export interface PerguntaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pergunta'], meta: { name: 'Pergunta' } }
    /**
     * Find zero or one Pergunta that matches the filter.
     * @param {PerguntaFindUniqueArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerguntaFindUniqueArgs>(args: SelectSubset<T, PerguntaFindUniqueArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pergunta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerguntaFindUniqueOrThrowArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerguntaFindUniqueOrThrowArgs>(args: SelectSubset<T, PerguntaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pergunta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindFirstArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerguntaFindFirstArgs>(args?: SelectSubset<T, PerguntaFindFirstArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pergunta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindFirstOrThrowArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerguntaFindFirstOrThrowArgs>(args?: SelectSubset<T, PerguntaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perguntas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perguntas
     * const perguntas = await prisma.pergunta.findMany()
     * 
     * // Get first 10 Perguntas
     * const perguntas = await prisma.pergunta.findMany({ take: 10 })
     * 
     * // Only select the `id_pergunta`
     * const perguntaWithId_perguntaOnly = await prisma.pergunta.findMany({ select: { id_pergunta: true } })
     * 
     */
    findMany<T extends PerguntaFindManyArgs>(args?: SelectSubset<T, PerguntaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pergunta.
     * @param {PerguntaCreateArgs} args - Arguments to create a Pergunta.
     * @example
     * // Create one Pergunta
     * const Pergunta = await prisma.pergunta.create({
     *   data: {
     *     // ... data to create a Pergunta
     *   }
     * })
     * 
     */
    create<T extends PerguntaCreateArgs>(args: SelectSubset<T, PerguntaCreateArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perguntas.
     * @param {PerguntaCreateManyArgs} args - Arguments to create many Perguntas.
     * @example
     * // Create many Perguntas
     * const pergunta = await prisma.pergunta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerguntaCreateManyArgs>(args?: SelectSubset<T, PerguntaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perguntas and returns the data saved in the database.
     * @param {PerguntaCreateManyAndReturnArgs} args - Arguments to create many Perguntas.
     * @example
     * // Create many Perguntas
     * const pergunta = await prisma.pergunta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perguntas and only return the `id_pergunta`
     * const perguntaWithId_perguntaOnly = await prisma.pergunta.createManyAndReturn({
     *   select: { id_pergunta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerguntaCreateManyAndReturnArgs>(args?: SelectSubset<T, PerguntaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pergunta.
     * @param {PerguntaDeleteArgs} args - Arguments to delete one Pergunta.
     * @example
     * // Delete one Pergunta
     * const Pergunta = await prisma.pergunta.delete({
     *   where: {
     *     // ... filter to delete one Pergunta
     *   }
     * })
     * 
     */
    delete<T extends PerguntaDeleteArgs>(args: SelectSubset<T, PerguntaDeleteArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pergunta.
     * @param {PerguntaUpdateArgs} args - Arguments to update one Pergunta.
     * @example
     * // Update one Pergunta
     * const pergunta = await prisma.pergunta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerguntaUpdateArgs>(args: SelectSubset<T, PerguntaUpdateArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perguntas.
     * @param {PerguntaDeleteManyArgs} args - Arguments to filter Perguntas to delete.
     * @example
     * // Delete a few Perguntas
     * const { count } = await prisma.pergunta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerguntaDeleteManyArgs>(args?: SelectSubset<T, PerguntaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perguntas
     * const pergunta = await prisma.pergunta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerguntaUpdateManyArgs>(args: SelectSubset<T, PerguntaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perguntas and returns the data updated in the database.
     * @param {PerguntaUpdateManyAndReturnArgs} args - Arguments to update many Perguntas.
     * @example
     * // Update many Perguntas
     * const pergunta = await prisma.pergunta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perguntas and only return the `id_pergunta`
     * const perguntaWithId_perguntaOnly = await prisma.pergunta.updateManyAndReturn({
     *   select: { id_pergunta: true },
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
    updateManyAndReturn<T extends PerguntaUpdateManyAndReturnArgs>(args: SelectSubset<T, PerguntaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pergunta.
     * @param {PerguntaUpsertArgs} args - Arguments to update or create a Pergunta.
     * @example
     * // Update or create a Pergunta
     * const pergunta = await prisma.pergunta.upsert({
     *   create: {
     *     // ... data to create a Pergunta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pergunta we want to update
     *   }
     * })
     */
    upsert<T extends PerguntaUpsertArgs>(args: SelectSubset<T, PerguntaUpsertArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCountArgs} args - Arguments to filter Perguntas to count.
     * @example
     * // Count the number of Perguntas
     * const count = await prisma.pergunta.count({
     *   where: {
     *     // ... the filter for the Perguntas we want to count
     *   }
     * })
    **/
    count<T extends PerguntaCountArgs>(
      args?: Subset<T, PerguntaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerguntaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pergunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerguntaAggregateArgs>(args: Subset<T, PerguntaAggregateArgs>): Prisma.PrismaPromise<GetPerguntaAggregateType<T>>

    /**
     * Group by Pergunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaGroupByArgs} args - Group by arguments.
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
      T extends PerguntaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerguntaGroupByArgs['orderBy'] }
        : { orderBy?: PerguntaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerguntaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerguntaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pergunta model
   */
  readonly fields: PerguntaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pergunta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerguntaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opcoes<T extends Pergunta$opcoesArgs<ExtArgs> = {}>(args?: Subset<T, Pergunta$opcoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acertos<T extends Pergunta$acertosArgs<ExtArgs> = {}>(args?: Subset<T, Pergunta$acertosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faculdade<T extends Pergunta$faculdadeArgs<ExtArgs> = {}>(args?: Subset<T, Pergunta$faculdadeArgs<ExtArgs>>): Prisma__FaculdadeClient<$Result.GetResult<Prisma.$FaculdadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pergunta model
   */
  interface PerguntaFieldRefs {
    readonly id_pergunta: FieldRef<"Pergunta", 'String'>
    readonly id_faculdade: FieldRef<"Pergunta", 'String'>
    readonly enunciado: FieldRef<"Pergunta", 'String'>
    readonly data_criação: FieldRef<"Pergunta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pergunta findUnique
   */
  export type PerguntaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where: PerguntaWhereUniqueInput
  }

  /**
   * Pergunta findUniqueOrThrow
   */
  export type PerguntaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where: PerguntaWhereUniqueInput
  }

  /**
   * Pergunta findFirst
   */
  export type PerguntaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perguntas.
     */
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }

  /**
   * Pergunta findFirstOrThrow
   */
  export type PerguntaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perguntas.
     */
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }

  /**
   * Pergunta findMany
   */
  export type PerguntaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Perguntas to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }

  /**
   * Pergunta create
   */
  export type PerguntaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pergunta.
     */
    data: XOR<PerguntaCreateInput, PerguntaUncheckedCreateInput>
  }

  /**
   * Pergunta createMany
   */
  export type PerguntaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perguntas.
     */
    data: PerguntaCreateManyInput | PerguntaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pergunta createManyAndReturn
   */
  export type PerguntaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * The data used to create many Perguntas.
     */
    data: PerguntaCreateManyInput | PerguntaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pergunta update
   */
  export type PerguntaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pergunta.
     */
    data: XOR<PerguntaUpdateInput, PerguntaUncheckedUpdateInput>
    /**
     * Choose, which Pergunta to update.
     */
    where: PerguntaWhereUniqueInput
  }

  /**
   * Pergunta updateMany
   */
  export type PerguntaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perguntas.
     */
    data: XOR<PerguntaUpdateManyMutationInput, PerguntaUncheckedUpdateManyInput>
    /**
     * Filter which Perguntas to update
     */
    where?: PerguntaWhereInput
    /**
     * Limit how many Perguntas to update.
     */
    limit?: number
  }

  /**
   * Pergunta updateManyAndReturn
   */
  export type PerguntaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * The data used to update Perguntas.
     */
    data: XOR<PerguntaUpdateManyMutationInput, PerguntaUncheckedUpdateManyInput>
    /**
     * Filter which Perguntas to update
     */
    where?: PerguntaWhereInput
    /**
     * Limit how many Perguntas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pergunta upsert
   */
  export type PerguntaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pergunta to update in case it exists.
     */
    where: PerguntaWhereUniqueInput
    /**
     * In case the Pergunta found by the `where` argument doesn't exist, create a new Pergunta with this data.
     */
    create: XOR<PerguntaCreateInput, PerguntaUncheckedCreateInput>
    /**
     * In case the Pergunta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerguntaUpdateInput, PerguntaUncheckedUpdateInput>
  }

  /**
   * Pergunta delete
   */
  export type PerguntaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter which Pergunta to delete.
     */
    where: PerguntaWhereUniqueInput
  }

  /**
   * Pergunta deleteMany
   */
  export type PerguntaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perguntas to delete
     */
    where?: PerguntaWhereInput
    /**
     * Limit how many Perguntas to delete.
     */
    limit?: number
  }

  /**
   * Pergunta.opcoes
   */
  export type Pergunta$opcoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    where?: OpcaoRespostaWhereInput
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    cursor?: OpcaoRespostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpcaoRespostaScalarFieldEnum | OpcaoRespostaScalarFieldEnum[]
  }

  /**
   * Pergunta.acertos
   */
  export type Pergunta$acertosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    where?: Usuario_AcertosWhereInput
    orderBy?: Usuario_AcertosOrderByWithRelationInput | Usuario_AcertosOrderByWithRelationInput[]
    cursor?: Usuario_AcertosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_AcertosScalarFieldEnum | Usuario_AcertosScalarFieldEnum[]
  }

  /**
   * Pergunta.faculdade
   */
  export type Pergunta$faculdadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculdade
     */
    select?: FaculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculdade
     */
    omit?: FaculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaculdadeInclude<ExtArgs> | null
    where?: FaculdadeWhereInput
  }

  /**
   * Pergunta without action
   */
  export type PerguntaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
  }


  /**
   * Model OpcaoResposta
   */

  export type AggregateOpcaoResposta = {
    _count: OpcaoRespostaCountAggregateOutputType | null
    _min: OpcaoRespostaMinAggregateOutputType | null
    _max: OpcaoRespostaMaxAggregateOutputType | null
  }

  export type OpcaoRespostaMinAggregateOutputType = {
    id_opcao_resposta: string | null
    id_pergunta: string | null
    texto_resposta: string | null
    correta: boolean | null
  }

  export type OpcaoRespostaMaxAggregateOutputType = {
    id_opcao_resposta: string | null
    id_pergunta: string | null
    texto_resposta: string | null
    correta: boolean | null
  }

  export type OpcaoRespostaCountAggregateOutputType = {
    id_opcao_resposta: number
    id_pergunta: number
    texto_resposta: number
    correta: number
    _all: number
  }


  export type OpcaoRespostaMinAggregateInputType = {
    id_opcao_resposta?: true
    id_pergunta?: true
    texto_resposta?: true
    correta?: true
  }

  export type OpcaoRespostaMaxAggregateInputType = {
    id_opcao_resposta?: true
    id_pergunta?: true
    texto_resposta?: true
    correta?: true
  }

  export type OpcaoRespostaCountAggregateInputType = {
    id_opcao_resposta?: true
    id_pergunta?: true
    texto_resposta?: true
    correta?: true
    _all?: true
  }

  export type OpcaoRespostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpcaoResposta to aggregate.
     */
    where?: OpcaoRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostas to fetch.
     */
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpcaoRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpcaoRespostas
    **/
    _count?: true | OpcaoRespostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpcaoRespostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpcaoRespostaMaxAggregateInputType
  }

  export type GetOpcaoRespostaAggregateType<T extends OpcaoRespostaAggregateArgs> = {
        [P in keyof T & keyof AggregateOpcaoResposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpcaoResposta[P]>
      : GetScalarType<T[P], AggregateOpcaoResposta[P]>
  }




  export type OpcaoRespostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcaoRespostaWhereInput
    orderBy?: OpcaoRespostaOrderByWithAggregationInput | OpcaoRespostaOrderByWithAggregationInput[]
    by: OpcaoRespostaScalarFieldEnum[] | OpcaoRespostaScalarFieldEnum
    having?: OpcaoRespostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpcaoRespostaCountAggregateInputType | true
    _min?: OpcaoRespostaMinAggregateInputType
    _max?: OpcaoRespostaMaxAggregateInputType
  }

  export type OpcaoRespostaGroupByOutputType = {
    id_opcao_resposta: string
    id_pergunta: string
    texto_resposta: string
    correta: boolean
    _count: OpcaoRespostaCountAggregateOutputType | null
    _min: OpcaoRespostaMinAggregateOutputType | null
    _max: OpcaoRespostaMaxAggregateOutputType | null
  }

  type GetOpcaoRespostaGroupByPayload<T extends OpcaoRespostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpcaoRespostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpcaoRespostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpcaoRespostaGroupByOutputType[P]>
            : GetScalarType<T[P], OpcaoRespostaGroupByOutputType[P]>
        }
      >
    >


  export type OpcaoRespostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_opcao_resposta?: boolean
    id_pergunta?: boolean
    texto_resposta?: boolean
    correta?: boolean
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoResposta"]>

  export type OpcaoRespostaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_opcao_resposta?: boolean
    id_pergunta?: boolean
    texto_resposta?: boolean
    correta?: boolean
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoResposta"]>

  export type OpcaoRespostaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_opcao_resposta?: boolean
    id_pergunta?: boolean
    texto_resposta?: boolean
    correta?: boolean
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoResposta"]>

  export type OpcaoRespostaSelectScalar = {
    id_opcao_resposta?: boolean
    id_pergunta?: boolean
    texto_resposta?: boolean
    correta?: boolean
  }

  export type OpcaoRespostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_opcao_resposta" | "id_pergunta" | "texto_resposta" | "correta", ExtArgs["result"]["opcaoResposta"]>
  export type OpcaoRespostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type OpcaoRespostaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type OpcaoRespostaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }

  export type $OpcaoRespostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpcaoResposta"
    objects: {
      pergunta: Prisma.$PerguntaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_opcao_resposta: string
      id_pergunta: string
      texto_resposta: string
      correta: boolean
    }, ExtArgs["result"]["opcaoResposta"]>
    composites: {}
  }

  type OpcaoRespostaGetPayload<S extends boolean | null | undefined | OpcaoRespostaDefaultArgs> = $Result.GetResult<Prisma.$OpcaoRespostaPayload, S>

  type OpcaoRespostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpcaoRespostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpcaoRespostaCountAggregateInputType | true
    }

  export interface OpcaoRespostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpcaoResposta'], meta: { name: 'OpcaoResposta' } }
    /**
     * Find zero or one OpcaoResposta that matches the filter.
     * @param {OpcaoRespostaFindUniqueArgs} args - Arguments to find a OpcaoResposta
     * @example
     * // Get one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpcaoRespostaFindUniqueArgs>(args: SelectSubset<T, OpcaoRespostaFindUniqueArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpcaoResposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpcaoRespostaFindUniqueOrThrowArgs} args - Arguments to find a OpcaoResposta
     * @example
     * // Get one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpcaoRespostaFindUniqueOrThrowArgs>(args: SelectSubset<T, OpcaoRespostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpcaoResposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaFindFirstArgs} args - Arguments to find a OpcaoResposta
     * @example
     * // Get one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpcaoRespostaFindFirstArgs>(args?: SelectSubset<T, OpcaoRespostaFindFirstArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpcaoResposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaFindFirstOrThrowArgs} args - Arguments to find a OpcaoResposta
     * @example
     * // Get one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpcaoRespostaFindFirstOrThrowArgs>(args?: SelectSubset<T, OpcaoRespostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpcaoRespostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpcaoRespostas
     * const opcaoRespostas = await prisma.opcaoResposta.findMany()
     * 
     * // Get first 10 OpcaoRespostas
     * const opcaoRespostas = await prisma.opcaoResposta.findMany({ take: 10 })
     * 
     * // Only select the `id_opcao_resposta`
     * const opcaoRespostaWithId_opcao_respostaOnly = await prisma.opcaoResposta.findMany({ select: { id_opcao_resposta: true } })
     * 
     */
    findMany<T extends OpcaoRespostaFindManyArgs>(args?: SelectSubset<T, OpcaoRespostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpcaoResposta.
     * @param {OpcaoRespostaCreateArgs} args - Arguments to create a OpcaoResposta.
     * @example
     * // Create one OpcaoResposta
     * const OpcaoResposta = await prisma.opcaoResposta.create({
     *   data: {
     *     // ... data to create a OpcaoResposta
     *   }
     * })
     * 
     */
    create<T extends OpcaoRespostaCreateArgs>(args: SelectSubset<T, OpcaoRespostaCreateArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpcaoRespostas.
     * @param {OpcaoRespostaCreateManyArgs} args - Arguments to create many OpcaoRespostas.
     * @example
     * // Create many OpcaoRespostas
     * const opcaoResposta = await prisma.opcaoResposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpcaoRespostaCreateManyArgs>(args?: SelectSubset<T, OpcaoRespostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpcaoRespostas and returns the data saved in the database.
     * @param {OpcaoRespostaCreateManyAndReturnArgs} args - Arguments to create many OpcaoRespostas.
     * @example
     * // Create many OpcaoRespostas
     * const opcaoResposta = await prisma.opcaoResposta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpcaoRespostas and only return the `id_opcao_resposta`
     * const opcaoRespostaWithId_opcao_respostaOnly = await prisma.opcaoResposta.createManyAndReturn({
     *   select: { id_opcao_resposta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpcaoRespostaCreateManyAndReturnArgs>(args?: SelectSubset<T, OpcaoRespostaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpcaoResposta.
     * @param {OpcaoRespostaDeleteArgs} args - Arguments to delete one OpcaoResposta.
     * @example
     * // Delete one OpcaoResposta
     * const OpcaoResposta = await prisma.opcaoResposta.delete({
     *   where: {
     *     // ... filter to delete one OpcaoResposta
     *   }
     * })
     * 
     */
    delete<T extends OpcaoRespostaDeleteArgs>(args: SelectSubset<T, OpcaoRespostaDeleteArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpcaoResposta.
     * @param {OpcaoRespostaUpdateArgs} args - Arguments to update one OpcaoResposta.
     * @example
     * // Update one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpcaoRespostaUpdateArgs>(args: SelectSubset<T, OpcaoRespostaUpdateArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpcaoRespostas.
     * @param {OpcaoRespostaDeleteManyArgs} args - Arguments to filter OpcaoRespostas to delete.
     * @example
     * // Delete a few OpcaoRespostas
     * const { count } = await prisma.opcaoResposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpcaoRespostaDeleteManyArgs>(args?: SelectSubset<T, OpcaoRespostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpcaoRespostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpcaoRespostas
     * const opcaoResposta = await prisma.opcaoResposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpcaoRespostaUpdateManyArgs>(args: SelectSubset<T, OpcaoRespostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpcaoRespostas and returns the data updated in the database.
     * @param {OpcaoRespostaUpdateManyAndReturnArgs} args - Arguments to update many OpcaoRespostas.
     * @example
     * // Update many OpcaoRespostas
     * const opcaoResposta = await prisma.opcaoResposta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpcaoRespostas and only return the `id_opcao_resposta`
     * const opcaoRespostaWithId_opcao_respostaOnly = await prisma.opcaoResposta.updateManyAndReturn({
     *   select: { id_opcao_resposta: true },
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
    updateManyAndReturn<T extends OpcaoRespostaUpdateManyAndReturnArgs>(args: SelectSubset<T, OpcaoRespostaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpcaoResposta.
     * @param {OpcaoRespostaUpsertArgs} args - Arguments to update or create a OpcaoResposta.
     * @example
     * // Update or create a OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.upsert({
     *   create: {
     *     // ... data to create a OpcaoResposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpcaoResposta we want to update
     *   }
     * })
     */
    upsert<T extends OpcaoRespostaUpsertArgs>(args: SelectSubset<T, OpcaoRespostaUpsertArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpcaoRespostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaCountArgs} args - Arguments to filter OpcaoRespostas to count.
     * @example
     * // Count the number of OpcaoRespostas
     * const count = await prisma.opcaoResposta.count({
     *   where: {
     *     // ... the filter for the OpcaoRespostas we want to count
     *   }
     * })
    **/
    count<T extends OpcaoRespostaCountArgs>(
      args?: Subset<T, OpcaoRespostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpcaoRespostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpcaoResposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpcaoRespostaAggregateArgs>(args: Subset<T, OpcaoRespostaAggregateArgs>): Prisma.PrismaPromise<GetOpcaoRespostaAggregateType<T>>

    /**
     * Group by OpcaoResposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaGroupByArgs} args - Group by arguments.
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
      T extends OpcaoRespostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpcaoRespostaGroupByArgs['orderBy'] }
        : { orderBy?: OpcaoRespostaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpcaoRespostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpcaoRespostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpcaoResposta model
   */
  readonly fields: OpcaoRespostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpcaoResposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpcaoRespostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pergunta<T extends PerguntaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerguntaDefaultArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OpcaoResposta model
   */
  interface OpcaoRespostaFieldRefs {
    readonly id_opcao_resposta: FieldRef<"OpcaoResposta", 'String'>
    readonly id_pergunta: FieldRef<"OpcaoResposta", 'String'>
    readonly texto_resposta: FieldRef<"OpcaoResposta", 'String'>
    readonly correta: FieldRef<"OpcaoResposta", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OpcaoResposta findUnique
   */
  export type OpcaoRespostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoResposta to fetch.
     */
    where: OpcaoRespostaWhereUniqueInput
  }

  /**
   * OpcaoResposta findUniqueOrThrow
   */
  export type OpcaoRespostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoResposta to fetch.
     */
    where: OpcaoRespostaWhereUniqueInput
  }

  /**
   * OpcaoResposta findFirst
   */
  export type OpcaoRespostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoResposta to fetch.
     */
    where?: OpcaoRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostas to fetch.
     */
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpcaoRespostas.
     */
    cursor?: OpcaoRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpcaoRespostas.
     */
    distinct?: OpcaoRespostaScalarFieldEnum | OpcaoRespostaScalarFieldEnum[]
  }

  /**
   * OpcaoResposta findFirstOrThrow
   */
  export type OpcaoRespostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoResposta to fetch.
     */
    where?: OpcaoRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostas to fetch.
     */
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpcaoRespostas.
     */
    cursor?: OpcaoRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpcaoRespostas.
     */
    distinct?: OpcaoRespostaScalarFieldEnum | OpcaoRespostaScalarFieldEnum[]
  }

  /**
   * OpcaoResposta findMany
   */
  export type OpcaoRespostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoRespostas to fetch.
     */
    where?: OpcaoRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostas to fetch.
     */
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpcaoRespostas.
     */
    cursor?: OpcaoRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostas.
     */
    skip?: number
    distinct?: OpcaoRespostaScalarFieldEnum | OpcaoRespostaScalarFieldEnum[]
  }

  /**
   * OpcaoResposta create
   */
  export type OpcaoRespostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * The data needed to create a OpcaoResposta.
     */
    data: XOR<OpcaoRespostaCreateInput, OpcaoRespostaUncheckedCreateInput>
  }

  /**
   * OpcaoResposta createMany
   */
  export type OpcaoRespostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpcaoRespostas.
     */
    data: OpcaoRespostaCreateManyInput | OpcaoRespostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpcaoResposta createManyAndReturn
   */
  export type OpcaoRespostaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * The data used to create many OpcaoRespostas.
     */
    data: OpcaoRespostaCreateManyInput | OpcaoRespostaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpcaoResposta update
   */
  export type OpcaoRespostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * The data needed to update a OpcaoResposta.
     */
    data: XOR<OpcaoRespostaUpdateInput, OpcaoRespostaUncheckedUpdateInput>
    /**
     * Choose, which OpcaoResposta to update.
     */
    where: OpcaoRespostaWhereUniqueInput
  }

  /**
   * OpcaoResposta updateMany
   */
  export type OpcaoRespostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpcaoRespostas.
     */
    data: XOR<OpcaoRespostaUpdateManyMutationInput, OpcaoRespostaUncheckedUpdateManyInput>
    /**
     * Filter which OpcaoRespostas to update
     */
    where?: OpcaoRespostaWhereInput
    /**
     * Limit how many OpcaoRespostas to update.
     */
    limit?: number
  }

  /**
   * OpcaoResposta updateManyAndReturn
   */
  export type OpcaoRespostaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * The data used to update OpcaoRespostas.
     */
    data: XOR<OpcaoRespostaUpdateManyMutationInput, OpcaoRespostaUncheckedUpdateManyInput>
    /**
     * Filter which OpcaoRespostas to update
     */
    where?: OpcaoRespostaWhereInput
    /**
     * Limit how many OpcaoRespostas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpcaoResposta upsert
   */
  export type OpcaoRespostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * The filter to search for the OpcaoResposta to update in case it exists.
     */
    where: OpcaoRespostaWhereUniqueInput
    /**
     * In case the OpcaoResposta found by the `where` argument doesn't exist, create a new OpcaoResposta with this data.
     */
    create: XOR<OpcaoRespostaCreateInput, OpcaoRespostaUncheckedCreateInput>
    /**
     * In case the OpcaoResposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpcaoRespostaUpdateInput, OpcaoRespostaUncheckedUpdateInput>
  }

  /**
   * OpcaoResposta delete
   */
  export type OpcaoRespostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter which OpcaoResposta to delete.
     */
    where: OpcaoRespostaWhereUniqueInput
  }

  /**
   * OpcaoResposta deleteMany
   */
  export type OpcaoRespostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpcaoRespostas to delete
     */
    where?: OpcaoRespostaWhereInput
    /**
     * Limit how many OpcaoRespostas to delete.
     */
    limit?: number
  }

  /**
   * OpcaoResposta without action
   */
  export type OpcaoRespostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario_Acertos
   */

  export type AggregateUsuario_Acertos = {
    _count: Usuario_AcertosCountAggregateOutputType | null
    _min: Usuario_AcertosMinAggregateOutputType | null
    _max: Usuario_AcertosMaxAggregateOutputType | null
  }

  export type Usuario_AcertosMinAggregateOutputType = {
    id_usuario_acerto: string | null
    id_usuario: string | null
    id_pergunta: string | null
    id_opcao_resposta: string | null
    acertou: boolean | null
  }

  export type Usuario_AcertosMaxAggregateOutputType = {
    id_usuario_acerto: string | null
    id_usuario: string | null
    id_pergunta: string | null
    id_opcao_resposta: string | null
    acertou: boolean | null
  }

  export type Usuario_AcertosCountAggregateOutputType = {
    id_usuario_acerto: number
    id_usuario: number
    id_pergunta: number
    id_opcao_resposta: number
    acertou: number
    _all: number
  }


  export type Usuario_AcertosMinAggregateInputType = {
    id_usuario_acerto?: true
    id_usuario?: true
    id_pergunta?: true
    id_opcao_resposta?: true
    acertou?: true
  }

  export type Usuario_AcertosMaxAggregateInputType = {
    id_usuario_acerto?: true
    id_usuario?: true
    id_pergunta?: true
    id_opcao_resposta?: true
    acertou?: true
  }

  export type Usuario_AcertosCountAggregateInputType = {
    id_usuario_acerto?: true
    id_usuario?: true
    id_pergunta?: true
    id_opcao_resposta?: true
    acertou?: true
    _all?: true
  }

  export type Usuario_AcertosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario_Acertos to aggregate.
     */
    where?: Usuario_AcertosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_Acertos to fetch.
     */
    orderBy?: Usuario_AcertosOrderByWithRelationInput | Usuario_AcertosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Usuario_AcertosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_Acertos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_Acertos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuario_Acertos
    **/
    _count?: true | Usuario_AcertosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_AcertosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_AcertosMaxAggregateInputType
  }

  export type GetUsuario_AcertosAggregateType<T extends Usuario_AcertosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_Acertos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_Acertos[P]>
      : GetScalarType<T[P], AggregateUsuario_Acertos[P]>
  }




  export type Usuario_AcertosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Usuario_AcertosWhereInput
    orderBy?: Usuario_AcertosOrderByWithAggregationInput | Usuario_AcertosOrderByWithAggregationInput[]
    by: Usuario_AcertosScalarFieldEnum[] | Usuario_AcertosScalarFieldEnum
    having?: Usuario_AcertosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_AcertosCountAggregateInputType | true
    _min?: Usuario_AcertosMinAggregateInputType
    _max?: Usuario_AcertosMaxAggregateInputType
  }

  export type Usuario_AcertosGroupByOutputType = {
    id_usuario_acerto: string
    id_usuario: string
    id_pergunta: string
    id_opcao_resposta: string
    acertou: boolean
    _count: Usuario_AcertosCountAggregateOutputType | null
    _min: Usuario_AcertosMinAggregateOutputType | null
    _max: Usuario_AcertosMaxAggregateOutputType | null
  }

  type GetUsuario_AcertosGroupByPayload<T extends Usuario_AcertosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_AcertosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_AcertosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_AcertosGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_AcertosGroupByOutputType[P]>
        }
      >
    >


  export type Usuario_AcertosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario_acerto?: boolean
    id_usuario?: boolean
    id_pergunta?: boolean
    id_opcao_resposta?: boolean
    acertou?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_Acertos"]>

  export type Usuario_AcertosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario_acerto?: boolean
    id_usuario?: boolean
    id_pergunta?: boolean
    id_opcao_resposta?: boolean
    acertou?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_Acertos"]>

  export type Usuario_AcertosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario_acerto?: boolean
    id_usuario?: boolean
    id_pergunta?: boolean
    id_opcao_resposta?: boolean
    acertou?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_Acertos"]>

  export type Usuario_AcertosSelectScalar = {
    id_usuario_acerto?: boolean
    id_usuario?: boolean
    id_pergunta?: boolean
    id_opcao_resposta?: boolean
    acertou?: boolean
  }

  export type Usuario_AcertosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario_acerto" | "id_usuario" | "id_pergunta" | "id_opcao_resposta" | "acertou", ExtArgs["result"]["usuario_Acertos"]>
  export type Usuario_AcertosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type Usuario_AcertosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type Usuario_AcertosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }

  export type $Usuario_AcertosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario_Acertos"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      pergunta: Prisma.$PerguntaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario_acerto: string
      id_usuario: string
      id_pergunta: string
      id_opcao_resposta: string
      acertou: boolean
    }, ExtArgs["result"]["usuario_Acertos"]>
    composites: {}
  }

  type Usuario_AcertosGetPayload<S extends boolean | null | undefined | Usuario_AcertosDefaultArgs> = $Result.GetResult<Prisma.$Usuario_AcertosPayload, S>

  type Usuario_AcertosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Usuario_AcertosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_AcertosCountAggregateInputType | true
    }

  export interface Usuario_AcertosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario_Acertos'], meta: { name: 'Usuario_Acertos' } }
    /**
     * Find zero or one Usuario_Acertos that matches the filter.
     * @param {Usuario_AcertosFindUniqueArgs} args - Arguments to find a Usuario_Acertos
     * @example
     * // Get one Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Usuario_AcertosFindUniqueArgs>(args: SelectSubset<T, Usuario_AcertosFindUniqueArgs<ExtArgs>>): Prisma__Usuario_AcertosClient<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_Acertos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Usuario_AcertosFindUniqueOrThrowArgs} args - Arguments to find a Usuario_Acertos
     * @example
     * // Get one Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Usuario_AcertosFindUniqueOrThrowArgs>(args: SelectSubset<T, Usuario_AcertosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Usuario_AcertosClient<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_Acertos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_AcertosFindFirstArgs} args - Arguments to find a Usuario_Acertos
     * @example
     * // Get one Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Usuario_AcertosFindFirstArgs>(args?: SelectSubset<T, Usuario_AcertosFindFirstArgs<ExtArgs>>): Prisma__Usuario_AcertosClient<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_Acertos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_AcertosFindFirstOrThrowArgs} args - Arguments to find a Usuario_Acertos
     * @example
     * // Get one Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Usuario_AcertosFindFirstOrThrowArgs>(args?: SelectSubset<T, Usuario_AcertosFindFirstOrThrowArgs<ExtArgs>>): Prisma__Usuario_AcertosClient<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_Acertos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_AcertosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.findMany()
     * 
     * // Get first 10 Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario_acerto`
     * const usuario_AcertosWithId_usuario_acertoOnly = await prisma.usuario_Acertos.findMany({ select: { id_usuario_acerto: true } })
     * 
     */
    findMany<T extends Usuario_AcertosFindManyArgs>(args?: SelectSubset<T, Usuario_AcertosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_Acertos.
     * @param {Usuario_AcertosCreateArgs} args - Arguments to create a Usuario_Acertos.
     * @example
     * // Create one Usuario_Acertos
     * const Usuario_Acertos = await prisma.usuario_Acertos.create({
     *   data: {
     *     // ... data to create a Usuario_Acertos
     *   }
     * })
     * 
     */
    create<T extends Usuario_AcertosCreateArgs>(args: SelectSubset<T, Usuario_AcertosCreateArgs<ExtArgs>>): Prisma__Usuario_AcertosClient<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_Acertos.
     * @param {Usuario_AcertosCreateManyArgs} args - Arguments to create many Usuario_Acertos.
     * @example
     * // Create many Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Usuario_AcertosCreateManyArgs>(args?: SelectSubset<T, Usuario_AcertosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_Acertos and returns the data saved in the database.
     * @param {Usuario_AcertosCreateManyAndReturnArgs} args - Arguments to create many Usuario_Acertos.
     * @example
     * // Create many Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_Acertos and only return the `id_usuario_acerto`
     * const usuario_AcertosWithId_usuario_acertoOnly = await prisma.usuario_Acertos.createManyAndReturn({
     *   select: { id_usuario_acerto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Usuario_AcertosCreateManyAndReturnArgs>(args?: SelectSubset<T, Usuario_AcertosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario_Acertos.
     * @param {Usuario_AcertosDeleteArgs} args - Arguments to delete one Usuario_Acertos.
     * @example
     * // Delete one Usuario_Acertos
     * const Usuario_Acertos = await prisma.usuario_Acertos.delete({
     *   where: {
     *     // ... filter to delete one Usuario_Acertos
     *   }
     * })
     * 
     */
    delete<T extends Usuario_AcertosDeleteArgs>(args: SelectSubset<T, Usuario_AcertosDeleteArgs<ExtArgs>>): Prisma__Usuario_AcertosClient<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_Acertos.
     * @param {Usuario_AcertosUpdateArgs} args - Arguments to update one Usuario_Acertos.
     * @example
     * // Update one Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Usuario_AcertosUpdateArgs>(args: SelectSubset<T, Usuario_AcertosUpdateArgs<ExtArgs>>): Prisma__Usuario_AcertosClient<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_Acertos.
     * @param {Usuario_AcertosDeleteManyArgs} args - Arguments to filter Usuario_Acertos to delete.
     * @example
     * // Delete a few Usuario_Acertos
     * const { count } = await prisma.usuario_Acertos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Usuario_AcertosDeleteManyArgs>(args?: SelectSubset<T, Usuario_AcertosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_Acertos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_AcertosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Usuario_AcertosUpdateManyArgs>(args: SelectSubset<T, Usuario_AcertosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_Acertos and returns the data updated in the database.
     * @param {Usuario_AcertosUpdateManyAndReturnArgs} args - Arguments to update many Usuario_Acertos.
     * @example
     * // Update many Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuario_Acertos and only return the `id_usuario_acerto`
     * const usuario_AcertosWithId_usuario_acertoOnly = await prisma.usuario_Acertos.updateManyAndReturn({
     *   select: { id_usuario_acerto: true },
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
    updateManyAndReturn<T extends Usuario_AcertosUpdateManyAndReturnArgs>(args: SelectSubset<T, Usuario_AcertosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario_Acertos.
     * @param {Usuario_AcertosUpsertArgs} args - Arguments to update or create a Usuario_Acertos.
     * @example
     * // Update or create a Usuario_Acertos
     * const usuario_Acertos = await prisma.usuario_Acertos.upsert({
     *   create: {
     *     // ... data to create a Usuario_Acertos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_Acertos we want to update
     *   }
     * })
     */
    upsert<T extends Usuario_AcertosUpsertArgs>(args: SelectSubset<T, Usuario_AcertosUpsertArgs<ExtArgs>>): Prisma__Usuario_AcertosClient<$Result.GetResult<Prisma.$Usuario_AcertosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_Acertos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_AcertosCountArgs} args - Arguments to filter Usuario_Acertos to count.
     * @example
     * // Count the number of Usuario_Acertos
     * const count = await prisma.usuario_Acertos.count({
     *   where: {
     *     // ... the filter for the Usuario_Acertos we want to count
     *   }
     * })
    **/
    count<T extends Usuario_AcertosCountArgs>(
      args?: Subset<T, Usuario_AcertosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_AcertosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_Acertos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_AcertosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuario_AcertosAggregateArgs>(args: Subset<T, Usuario_AcertosAggregateArgs>): Prisma.PrismaPromise<GetUsuario_AcertosAggregateType<T>>

    /**
     * Group by Usuario_Acertos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_AcertosGroupByArgs} args - Group by arguments.
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
      T extends Usuario_AcertosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Usuario_AcertosGroupByArgs['orderBy'] }
        : { orderBy?: Usuario_AcertosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Usuario_AcertosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_AcertosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario_Acertos model
   */
  readonly fields: Usuario_AcertosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario_Acertos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Usuario_AcertosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pergunta<T extends PerguntaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerguntaDefaultArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario_Acertos model
   */
  interface Usuario_AcertosFieldRefs {
    readonly id_usuario_acerto: FieldRef<"Usuario_Acertos", 'String'>
    readonly id_usuario: FieldRef<"Usuario_Acertos", 'String'>
    readonly id_pergunta: FieldRef<"Usuario_Acertos", 'String'>
    readonly id_opcao_resposta: FieldRef<"Usuario_Acertos", 'String'>
    readonly acertou: FieldRef<"Usuario_Acertos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario_Acertos findUnique
   */
  export type Usuario_AcertosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Acertos to fetch.
     */
    where: Usuario_AcertosWhereUniqueInput
  }

  /**
   * Usuario_Acertos findUniqueOrThrow
   */
  export type Usuario_AcertosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Acertos to fetch.
     */
    where: Usuario_AcertosWhereUniqueInput
  }

  /**
   * Usuario_Acertos findFirst
   */
  export type Usuario_AcertosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Acertos to fetch.
     */
    where?: Usuario_AcertosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_Acertos to fetch.
     */
    orderBy?: Usuario_AcertosOrderByWithRelationInput | Usuario_AcertosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuario_Acertos.
     */
    cursor?: Usuario_AcertosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_Acertos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_Acertos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuario_Acertos.
     */
    distinct?: Usuario_AcertosScalarFieldEnum | Usuario_AcertosScalarFieldEnum[]
  }

  /**
   * Usuario_Acertos findFirstOrThrow
   */
  export type Usuario_AcertosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Acertos to fetch.
     */
    where?: Usuario_AcertosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_Acertos to fetch.
     */
    orderBy?: Usuario_AcertosOrderByWithRelationInput | Usuario_AcertosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuario_Acertos.
     */
    cursor?: Usuario_AcertosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_Acertos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_Acertos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuario_Acertos.
     */
    distinct?: Usuario_AcertosScalarFieldEnum | Usuario_AcertosScalarFieldEnum[]
  }

  /**
   * Usuario_Acertos findMany
   */
  export type Usuario_AcertosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Acertos to fetch.
     */
    where?: Usuario_AcertosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_Acertos to fetch.
     */
    orderBy?: Usuario_AcertosOrderByWithRelationInput | Usuario_AcertosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuario_Acertos.
     */
    cursor?: Usuario_AcertosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_Acertos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_Acertos.
     */
    skip?: number
    distinct?: Usuario_AcertosScalarFieldEnum | Usuario_AcertosScalarFieldEnum[]
  }

  /**
   * Usuario_Acertos create
   */
  export type Usuario_AcertosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario_Acertos.
     */
    data: XOR<Usuario_AcertosCreateInput, Usuario_AcertosUncheckedCreateInput>
  }

  /**
   * Usuario_Acertos createMany
   */
  export type Usuario_AcertosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuario_Acertos.
     */
    data: Usuario_AcertosCreateManyInput | Usuario_AcertosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario_Acertos createManyAndReturn
   */
  export type Usuario_AcertosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * The data used to create many Usuario_Acertos.
     */
    data: Usuario_AcertosCreateManyInput | Usuario_AcertosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario_Acertos update
   */
  export type Usuario_AcertosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario_Acertos.
     */
    data: XOR<Usuario_AcertosUpdateInput, Usuario_AcertosUncheckedUpdateInput>
    /**
     * Choose, which Usuario_Acertos to update.
     */
    where: Usuario_AcertosWhereUniqueInput
  }

  /**
   * Usuario_Acertos updateMany
   */
  export type Usuario_AcertosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuario_Acertos.
     */
    data: XOR<Usuario_AcertosUpdateManyMutationInput, Usuario_AcertosUncheckedUpdateManyInput>
    /**
     * Filter which Usuario_Acertos to update
     */
    where?: Usuario_AcertosWhereInput
    /**
     * Limit how many Usuario_Acertos to update.
     */
    limit?: number
  }

  /**
   * Usuario_Acertos updateManyAndReturn
   */
  export type Usuario_AcertosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * The data used to update Usuario_Acertos.
     */
    data: XOR<Usuario_AcertosUpdateManyMutationInput, Usuario_AcertosUncheckedUpdateManyInput>
    /**
     * Filter which Usuario_Acertos to update
     */
    where?: Usuario_AcertosWhereInput
    /**
     * Limit how many Usuario_Acertos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario_Acertos upsert
   */
  export type Usuario_AcertosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario_Acertos to update in case it exists.
     */
    where: Usuario_AcertosWhereUniqueInput
    /**
     * In case the Usuario_Acertos found by the `where` argument doesn't exist, create a new Usuario_Acertos with this data.
     */
    create: XOR<Usuario_AcertosCreateInput, Usuario_AcertosUncheckedCreateInput>
    /**
     * In case the Usuario_Acertos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Usuario_AcertosUpdateInput, Usuario_AcertosUncheckedUpdateInput>
  }

  /**
   * Usuario_Acertos delete
   */
  export type Usuario_AcertosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
    /**
     * Filter which Usuario_Acertos to delete.
     */
    where: Usuario_AcertosWhereUniqueInput
  }

  /**
   * Usuario_Acertos deleteMany
   */
  export type Usuario_AcertosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario_Acertos to delete
     */
    where?: Usuario_AcertosWhereInput
    /**
     * Limit how many Usuario_Acertos to delete.
     */
    limit?: number
  }

  /**
   * Usuario_Acertos without action
   */
  export type Usuario_AcertosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Acertos
     */
    select?: Usuario_AcertosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_Acertos
     */
    omit?: Usuario_AcertosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_AcertosInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    id_faculdade: 'id_faculdade'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FaculdadeScalarFieldEnum: {
    id_faculdade: 'id_faculdade',
    nome: 'nome',
    endereco: 'endereco'
  };

  export type FaculdadeScalarFieldEnum = (typeof FaculdadeScalarFieldEnum)[keyof typeof FaculdadeScalarFieldEnum]


  export const Faculdade_EmpresaScalarFieldEnum: {
    id_faculdade_: 'id_faculdade_',
    id_faculdade: 'id_faculdade',
    id_empresa: 'id_empresa'
  };

  export type Faculdade_EmpresaScalarFieldEnum = (typeof Faculdade_EmpresaScalarFieldEnum)[keyof typeof Faculdade_EmpresaScalarFieldEnum]


  export const PerguntaScalarFieldEnum: {
    id_pergunta: 'id_pergunta',
    id_faculdade: 'id_faculdade',
    enunciado: 'enunciado',
    data_criação: 'data_criação'
  };

  export type PerguntaScalarFieldEnum = (typeof PerguntaScalarFieldEnum)[keyof typeof PerguntaScalarFieldEnum]


  export const OpcaoRespostaScalarFieldEnum: {
    id_opcao_resposta: 'id_opcao_resposta',
    id_pergunta: 'id_pergunta',
    texto_resposta: 'texto_resposta',
    correta: 'correta'
  };

  export type OpcaoRespostaScalarFieldEnum = (typeof OpcaoRespostaScalarFieldEnum)[keyof typeof OpcaoRespostaScalarFieldEnum]


  export const Usuario_AcertosScalarFieldEnum: {
    id_usuario_acerto: 'id_usuario_acerto',
    id_usuario: 'id_usuario',
    id_pergunta: 'id_pergunta',
    id_opcao_resposta: 'id_opcao_resposta',
    acertou: 'acertou'
  };

  export type Usuario_AcertosScalarFieldEnum = (typeof Usuario_AcertosScalarFieldEnum)[keyof typeof Usuario_AcertosScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    id_faculdade?: StringFilter<"Usuario"> | string
    faculdade?: XOR<FaculdadeScalarRelationFilter, FaculdadeWhereInput>
    acertos?: Usuario_AcertosListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    id_faculdade?: SortOrder
    faculdade?: FaculdadeOrderByWithRelationInput
    acertos?: Usuario_AcertosOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    id_faculdade?: StringFilter<"Usuario"> | string
    faculdade?: XOR<FaculdadeScalarRelationFilter, FaculdadeWhereInput>
    acertos?: Usuario_AcertosListRelationFilter
  }, "id_usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    id_faculdade?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    id_faculdade?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type FaculdadeWhereInput = {
    AND?: FaculdadeWhereInput | FaculdadeWhereInput[]
    OR?: FaculdadeWhereInput[]
    NOT?: FaculdadeWhereInput | FaculdadeWhereInput[]
    id_faculdade?: StringFilter<"Faculdade"> | string
    nome?: StringFilter<"Faculdade"> | string
    endereco?: StringFilter<"Faculdade"> | string
    usuarios?: UsuarioListRelationFilter
    faculdadesEmpresas?: Faculdade_EmpresaListRelationFilter
    perguntas?: PerguntaListRelationFilter
  }

  export type FaculdadeOrderByWithRelationInput = {
    id_faculdade?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    faculdadesEmpresas?: Faculdade_EmpresaOrderByRelationAggregateInput
    perguntas?: PerguntaOrderByRelationAggregateInput
  }

  export type FaculdadeWhereUniqueInput = Prisma.AtLeast<{
    id_faculdade?: string
    AND?: FaculdadeWhereInput | FaculdadeWhereInput[]
    OR?: FaculdadeWhereInput[]
    NOT?: FaculdadeWhereInput | FaculdadeWhereInput[]
    nome?: StringFilter<"Faculdade"> | string
    endereco?: StringFilter<"Faculdade"> | string
    usuarios?: UsuarioListRelationFilter
    faculdadesEmpresas?: Faculdade_EmpresaListRelationFilter
    perguntas?: PerguntaListRelationFilter
  }, "id_faculdade">

  export type FaculdadeOrderByWithAggregationInput = {
    id_faculdade?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    _count?: FaculdadeCountOrderByAggregateInput
    _max?: FaculdadeMaxOrderByAggregateInput
    _min?: FaculdadeMinOrderByAggregateInput
  }

  export type FaculdadeScalarWhereWithAggregatesInput = {
    AND?: FaculdadeScalarWhereWithAggregatesInput | FaculdadeScalarWhereWithAggregatesInput[]
    OR?: FaculdadeScalarWhereWithAggregatesInput[]
    NOT?: FaculdadeScalarWhereWithAggregatesInput | FaculdadeScalarWhereWithAggregatesInput[]
    id_faculdade?: StringWithAggregatesFilter<"Faculdade"> | string
    nome?: StringWithAggregatesFilter<"Faculdade"> | string
    endereco?: StringWithAggregatesFilter<"Faculdade"> | string
  }

  export type Faculdade_EmpresaWhereInput = {
    AND?: Faculdade_EmpresaWhereInput | Faculdade_EmpresaWhereInput[]
    OR?: Faculdade_EmpresaWhereInput[]
    NOT?: Faculdade_EmpresaWhereInput | Faculdade_EmpresaWhereInput[]
    id_faculdade_?: StringFilter<"Faculdade_Empresa"> | string
    id_faculdade?: StringFilter<"Faculdade_Empresa"> | string
    id_empresa?: StringFilter<"Faculdade_Empresa"> | string
    faculdade?: XOR<FaculdadeScalarRelationFilter, FaculdadeWhereInput>
  }

  export type Faculdade_EmpresaOrderByWithRelationInput = {
    id_faculdade_?: SortOrder
    id_faculdade?: SortOrder
    id_empresa?: SortOrder
    faculdade?: FaculdadeOrderByWithRelationInput
  }

  export type Faculdade_EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id_faculdade_?: string
    AND?: Faculdade_EmpresaWhereInput | Faculdade_EmpresaWhereInput[]
    OR?: Faculdade_EmpresaWhereInput[]
    NOT?: Faculdade_EmpresaWhereInput | Faculdade_EmpresaWhereInput[]
    id_faculdade?: StringFilter<"Faculdade_Empresa"> | string
    id_empresa?: StringFilter<"Faculdade_Empresa"> | string
    faculdade?: XOR<FaculdadeScalarRelationFilter, FaculdadeWhereInput>
  }, "id_faculdade_">

  export type Faculdade_EmpresaOrderByWithAggregationInput = {
    id_faculdade_?: SortOrder
    id_faculdade?: SortOrder
    id_empresa?: SortOrder
    _count?: Faculdade_EmpresaCountOrderByAggregateInput
    _max?: Faculdade_EmpresaMaxOrderByAggregateInput
    _min?: Faculdade_EmpresaMinOrderByAggregateInput
  }

  export type Faculdade_EmpresaScalarWhereWithAggregatesInput = {
    AND?: Faculdade_EmpresaScalarWhereWithAggregatesInput | Faculdade_EmpresaScalarWhereWithAggregatesInput[]
    OR?: Faculdade_EmpresaScalarWhereWithAggregatesInput[]
    NOT?: Faculdade_EmpresaScalarWhereWithAggregatesInput | Faculdade_EmpresaScalarWhereWithAggregatesInput[]
    id_faculdade_?: StringWithAggregatesFilter<"Faculdade_Empresa"> | string
    id_faculdade?: StringWithAggregatesFilter<"Faculdade_Empresa"> | string
    id_empresa?: StringWithAggregatesFilter<"Faculdade_Empresa"> | string
  }

  export type PerguntaWhereInput = {
    AND?: PerguntaWhereInput | PerguntaWhereInput[]
    OR?: PerguntaWhereInput[]
    NOT?: PerguntaWhereInput | PerguntaWhereInput[]
    id_pergunta?: StringFilter<"Pergunta"> | string
    id_faculdade?: StringFilter<"Pergunta"> | string
    enunciado?: StringFilter<"Pergunta"> | string
    data_criação?: DateTimeFilter<"Pergunta"> | Date | string
    opcoes?: OpcaoRespostaListRelationFilter
    acertos?: Usuario_AcertosListRelationFilter
    faculdade?: XOR<FaculdadeNullableScalarRelationFilter, FaculdadeWhereInput> | null
  }

  export type PerguntaOrderByWithRelationInput = {
    id_pergunta?: SortOrder
    id_faculdade?: SortOrder
    enunciado?: SortOrder
    data_criação?: SortOrder
    opcoes?: OpcaoRespostaOrderByRelationAggregateInput
    acertos?: Usuario_AcertosOrderByRelationAggregateInput
    faculdade?: FaculdadeOrderByWithRelationInput
  }

  export type PerguntaWhereUniqueInput = Prisma.AtLeast<{
    id_pergunta?: string
    AND?: PerguntaWhereInput | PerguntaWhereInput[]
    OR?: PerguntaWhereInput[]
    NOT?: PerguntaWhereInput | PerguntaWhereInput[]
    id_faculdade?: StringFilter<"Pergunta"> | string
    enunciado?: StringFilter<"Pergunta"> | string
    data_criação?: DateTimeFilter<"Pergunta"> | Date | string
    opcoes?: OpcaoRespostaListRelationFilter
    acertos?: Usuario_AcertosListRelationFilter
    faculdade?: XOR<FaculdadeNullableScalarRelationFilter, FaculdadeWhereInput> | null
  }, "id_pergunta">

  export type PerguntaOrderByWithAggregationInput = {
    id_pergunta?: SortOrder
    id_faculdade?: SortOrder
    enunciado?: SortOrder
    data_criação?: SortOrder
    _count?: PerguntaCountOrderByAggregateInput
    _max?: PerguntaMaxOrderByAggregateInput
    _min?: PerguntaMinOrderByAggregateInput
  }

  export type PerguntaScalarWhereWithAggregatesInput = {
    AND?: PerguntaScalarWhereWithAggregatesInput | PerguntaScalarWhereWithAggregatesInput[]
    OR?: PerguntaScalarWhereWithAggregatesInput[]
    NOT?: PerguntaScalarWhereWithAggregatesInput | PerguntaScalarWhereWithAggregatesInput[]
    id_pergunta?: StringWithAggregatesFilter<"Pergunta"> | string
    id_faculdade?: StringWithAggregatesFilter<"Pergunta"> | string
    enunciado?: StringWithAggregatesFilter<"Pergunta"> | string
    data_criação?: DateTimeWithAggregatesFilter<"Pergunta"> | Date | string
  }

  export type OpcaoRespostaWhereInput = {
    AND?: OpcaoRespostaWhereInput | OpcaoRespostaWhereInput[]
    OR?: OpcaoRespostaWhereInput[]
    NOT?: OpcaoRespostaWhereInput | OpcaoRespostaWhereInput[]
    id_opcao_resposta?: StringFilter<"OpcaoResposta"> | string
    id_pergunta?: StringFilter<"OpcaoResposta"> | string
    texto_resposta?: StringFilter<"OpcaoResposta"> | string
    correta?: BoolFilter<"OpcaoResposta"> | boolean
    pergunta?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
  }

  export type OpcaoRespostaOrderByWithRelationInput = {
    id_opcao_resposta?: SortOrder
    id_pergunta?: SortOrder
    texto_resposta?: SortOrder
    correta?: SortOrder
    pergunta?: PerguntaOrderByWithRelationInput
  }

  export type OpcaoRespostaWhereUniqueInput = Prisma.AtLeast<{
    id_opcao_resposta?: string
    AND?: OpcaoRespostaWhereInput | OpcaoRespostaWhereInput[]
    OR?: OpcaoRespostaWhereInput[]
    NOT?: OpcaoRespostaWhereInput | OpcaoRespostaWhereInput[]
    id_pergunta?: StringFilter<"OpcaoResposta"> | string
    texto_resposta?: StringFilter<"OpcaoResposta"> | string
    correta?: BoolFilter<"OpcaoResposta"> | boolean
    pergunta?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
  }, "id_opcao_resposta">

  export type OpcaoRespostaOrderByWithAggregationInput = {
    id_opcao_resposta?: SortOrder
    id_pergunta?: SortOrder
    texto_resposta?: SortOrder
    correta?: SortOrder
    _count?: OpcaoRespostaCountOrderByAggregateInput
    _max?: OpcaoRespostaMaxOrderByAggregateInput
    _min?: OpcaoRespostaMinOrderByAggregateInput
  }

  export type OpcaoRespostaScalarWhereWithAggregatesInput = {
    AND?: OpcaoRespostaScalarWhereWithAggregatesInput | OpcaoRespostaScalarWhereWithAggregatesInput[]
    OR?: OpcaoRespostaScalarWhereWithAggregatesInput[]
    NOT?: OpcaoRespostaScalarWhereWithAggregatesInput | OpcaoRespostaScalarWhereWithAggregatesInput[]
    id_opcao_resposta?: StringWithAggregatesFilter<"OpcaoResposta"> | string
    id_pergunta?: StringWithAggregatesFilter<"OpcaoResposta"> | string
    texto_resposta?: StringWithAggregatesFilter<"OpcaoResposta"> | string
    correta?: BoolWithAggregatesFilter<"OpcaoResposta"> | boolean
  }

  export type Usuario_AcertosWhereInput = {
    AND?: Usuario_AcertosWhereInput | Usuario_AcertosWhereInput[]
    OR?: Usuario_AcertosWhereInput[]
    NOT?: Usuario_AcertosWhereInput | Usuario_AcertosWhereInput[]
    id_usuario_acerto?: StringFilter<"Usuario_Acertos"> | string
    id_usuario?: StringFilter<"Usuario_Acertos"> | string
    id_pergunta?: StringFilter<"Usuario_Acertos"> | string
    id_opcao_resposta?: StringFilter<"Usuario_Acertos"> | string
    acertou?: BoolFilter<"Usuario_Acertos"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    pergunta?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
  }

  export type Usuario_AcertosOrderByWithRelationInput = {
    id_usuario_acerto?: SortOrder
    id_usuario?: SortOrder
    id_pergunta?: SortOrder
    id_opcao_resposta?: SortOrder
    acertou?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    pergunta?: PerguntaOrderByWithRelationInput
  }

  export type Usuario_AcertosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_acerto?: string
    AND?: Usuario_AcertosWhereInput | Usuario_AcertosWhereInput[]
    OR?: Usuario_AcertosWhereInput[]
    NOT?: Usuario_AcertosWhereInput | Usuario_AcertosWhereInput[]
    id_usuario?: StringFilter<"Usuario_Acertos"> | string
    id_pergunta?: StringFilter<"Usuario_Acertos"> | string
    id_opcao_resposta?: StringFilter<"Usuario_Acertos"> | string
    acertou?: BoolFilter<"Usuario_Acertos"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    pergunta?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
  }, "id_usuario_acerto">

  export type Usuario_AcertosOrderByWithAggregationInput = {
    id_usuario_acerto?: SortOrder
    id_usuario?: SortOrder
    id_pergunta?: SortOrder
    id_opcao_resposta?: SortOrder
    acertou?: SortOrder
    _count?: Usuario_AcertosCountOrderByAggregateInput
    _max?: Usuario_AcertosMaxOrderByAggregateInput
    _min?: Usuario_AcertosMinOrderByAggregateInput
  }

  export type Usuario_AcertosScalarWhereWithAggregatesInput = {
    AND?: Usuario_AcertosScalarWhereWithAggregatesInput | Usuario_AcertosScalarWhereWithAggregatesInput[]
    OR?: Usuario_AcertosScalarWhereWithAggregatesInput[]
    NOT?: Usuario_AcertosScalarWhereWithAggregatesInput | Usuario_AcertosScalarWhereWithAggregatesInput[]
    id_usuario_acerto?: StringWithAggregatesFilter<"Usuario_Acertos"> | string
    id_usuario?: StringWithAggregatesFilter<"Usuario_Acertos"> | string
    id_pergunta?: StringWithAggregatesFilter<"Usuario_Acertos"> | string
    id_opcao_resposta?: StringWithAggregatesFilter<"Usuario_Acertos"> | string
    acertou?: BoolWithAggregatesFilter<"Usuario_Acertos"> | boolean
  }

  export type UsuarioCreateInput = {
    id_usuario?: string
    nome: string
    email: string
    senha: string
    faculdade: FaculdadeCreateNestedOneWithoutUsuariosInput
    acertos?: Usuario_AcertosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: string
    nome: string
    email: string
    senha: string
    id_faculdade: string
    acertos?: Usuario_AcertosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    faculdade?: FaculdadeUpdateOneRequiredWithoutUsuariosNestedInput
    acertos?: Usuario_AcertosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
    acertos?: Usuario_AcertosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: string
    nome: string
    email: string
    senha: string
    id_faculdade: string
  }

  export type UsuarioUpdateManyMutationInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
  }

  export type FaculdadeCreateInput = {
    id_faculdade?: string
    nome: string
    endereco: string
    usuarios?: UsuarioCreateNestedManyWithoutFaculdadeInput
    faculdadesEmpresas?: Faculdade_EmpresaCreateNestedManyWithoutFaculdadeInput
    perguntas?: PerguntaCreateNestedManyWithoutFaculdadeInput
  }

  export type FaculdadeUncheckedCreateInput = {
    id_faculdade?: string
    nome: string
    endereco: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutFaculdadeInput
    faculdadesEmpresas?: Faculdade_EmpresaUncheckedCreateNestedManyWithoutFaculdadeInput
    perguntas?: PerguntaUncheckedCreateNestedManyWithoutFaculdadeInput
  }

  export type FaculdadeUpdateInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutFaculdadeNestedInput
    faculdadesEmpresas?: Faculdade_EmpresaUpdateManyWithoutFaculdadeNestedInput
    perguntas?: PerguntaUpdateManyWithoutFaculdadeNestedInput
  }

  export type FaculdadeUncheckedUpdateInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutFaculdadeNestedInput
    faculdadesEmpresas?: Faculdade_EmpresaUncheckedUpdateManyWithoutFaculdadeNestedInput
    perguntas?: PerguntaUncheckedUpdateManyWithoutFaculdadeNestedInput
  }

  export type FaculdadeCreateManyInput = {
    id_faculdade?: string
    nome: string
    endereco: string
  }

  export type FaculdadeUpdateManyMutationInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type FaculdadeUncheckedUpdateManyInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type Faculdade_EmpresaCreateInput = {
    id_faculdade_?: string
    id_empresa: string
    faculdade: FaculdadeCreateNestedOneWithoutFaculdadesEmpresasInput
  }

  export type Faculdade_EmpresaUncheckedCreateInput = {
    id_faculdade_?: string
    id_faculdade: string
    id_empresa: string
  }

  export type Faculdade_EmpresaUpdateInput = {
    id_faculdade_?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
    faculdade?: FaculdadeUpdateOneRequiredWithoutFaculdadesEmpresasNestedInput
  }

  export type Faculdade_EmpresaUncheckedUpdateInput = {
    id_faculdade_?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
  }

  export type Faculdade_EmpresaCreateManyInput = {
    id_faculdade_?: string
    id_faculdade: string
    id_empresa: string
  }

  export type Faculdade_EmpresaUpdateManyMutationInput = {
    id_faculdade_?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
  }

  export type Faculdade_EmpresaUncheckedUpdateManyInput = {
    id_faculdade_?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
  }

  export type PerguntaCreateInput = {
    id_pergunta?: string
    enunciado: string
    data_criação: Date | string
    opcoes?: OpcaoRespostaCreateNestedManyWithoutPerguntaInput
    acertos?: Usuario_AcertosCreateNestedManyWithoutPerguntaInput
    faculdade?: FaculdadeCreateNestedOneWithoutPerguntasInput
  }

  export type PerguntaUncheckedCreateInput = {
    id_pergunta?: string
    id_faculdade: string
    enunciado: string
    data_criação: Date | string
    opcoes?: OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput
    acertos?: Usuario_AcertosUncheckedCreateNestedManyWithoutPerguntaInput
  }

  export type PerguntaUpdateInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
    opcoes?: OpcaoRespostaUpdateManyWithoutPerguntaNestedInput
    acertos?: Usuario_AcertosUpdateManyWithoutPerguntaNestedInput
    faculdade?: FaculdadeUpdateOneWithoutPerguntasNestedInput
  }

  export type PerguntaUncheckedUpdateInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
    opcoes?: OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput
    acertos?: Usuario_AcertosUncheckedUpdateManyWithoutPerguntaNestedInput
  }

  export type PerguntaCreateManyInput = {
    id_pergunta?: string
    id_faculdade: string
    enunciado: string
    data_criação: Date | string
  }

  export type PerguntaUpdateManyMutationInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaUncheckedUpdateManyInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaCreateInput = {
    id_opcao_resposta?: string
    texto_resposta: string
    correta: boolean
    pergunta: PerguntaCreateNestedOneWithoutOpcoesInput
  }

  export type OpcaoRespostaUncheckedCreateInput = {
    id_opcao_resposta?: string
    id_pergunta: string
    texto_resposta: string
    correta: boolean
  }

  export type OpcaoRespostaUpdateInput = {
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    texto_resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
    pergunta?: PerguntaUpdateOneRequiredWithoutOpcoesNestedInput
  }

  export type OpcaoRespostaUncheckedUpdateInput = {
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    id_pergunta?: StringFieldUpdateOperationsInput | string
    texto_resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OpcaoRespostaCreateManyInput = {
    id_opcao_resposta?: string
    id_pergunta: string
    texto_resposta: string
    correta: boolean
  }

  export type OpcaoRespostaUpdateManyMutationInput = {
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    texto_resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OpcaoRespostaUncheckedUpdateManyInput = {
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    id_pergunta?: StringFieldUpdateOperationsInput | string
    texto_resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Usuario_AcertosCreateInput = {
    id_usuario_acerto?: string
    id_opcao_resposta: string
    acertou: boolean
    usuario: UsuarioCreateNestedOneWithoutAcertosInput
    pergunta: PerguntaCreateNestedOneWithoutAcertosInput
  }

  export type Usuario_AcertosUncheckedCreateInput = {
    id_usuario_acerto?: string
    id_usuario: string
    id_pergunta: string
    id_opcao_resposta: string
    acertou: boolean
  }

  export type Usuario_AcertosUpdateInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutAcertosNestedInput
    pergunta?: PerguntaUpdateOneRequiredWithoutAcertosNestedInput
  }

  export type Usuario_AcertosUncheckedUpdateInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    id_pergunta?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Usuario_AcertosCreateManyInput = {
    id_usuario_acerto?: string
    id_usuario: string
    id_pergunta: string
    id_opcao_resposta: string
    acertou: boolean
  }

  export type Usuario_AcertosUpdateManyMutationInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Usuario_AcertosUncheckedUpdateManyInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    id_pergunta?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
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

  export type FaculdadeScalarRelationFilter = {
    is?: FaculdadeWhereInput
    isNot?: FaculdadeWhereInput
  }

  export type Usuario_AcertosListRelationFilter = {
    every?: Usuario_AcertosWhereInput
    some?: Usuario_AcertosWhereInput
    none?: Usuario_AcertosWhereInput
  }

  export type Usuario_AcertosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    id_faculdade?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    id_faculdade?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    id_faculdade?: SortOrder
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type Faculdade_EmpresaListRelationFilter = {
    every?: Faculdade_EmpresaWhereInput
    some?: Faculdade_EmpresaWhereInput
    none?: Faculdade_EmpresaWhereInput
  }

  export type PerguntaListRelationFilter = {
    every?: PerguntaWhereInput
    some?: PerguntaWhereInput
    none?: PerguntaWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Faculdade_EmpresaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerguntaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaculdadeCountOrderByAggregateInput = {
    id_faculdade?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type FaculdadeMaxOrderByAggregateInput = {
    id_faculdade?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type FaculdadeMinOrderByAggregateInput = {
    id_faculdade?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type Faculdade_EmpresaCountOrderByAggregateInput = {
    id_faculdade_?: SortOrder
    id_faculdade?: SortOrder
    id_empresa?: SortOrder
  }

  export type Faculdade_EmpresaMaxOrderByAggregateInput = {
    id_faculdade_?: SortOrder
    id_faculdade?: SortOrder
    id_empresa?: SortOrder
  }

  export type Faculdade_EmpresaMinOrderByAggregateInput = {
    id_faculdade_?: SortOrder
    id_faculdade?: SortOrder
    id_empresa?: SortOrder
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

  export type OpcaoRespostaListRelationFilter = {
    every?: OpcaoRespostaWhereInput
    some?: OpcaoRespostaWhereInput
    none?: OpcaoRespostaWhereInput
  }

  export type FaculdadeNullableScalarRelationFilter = {
    is?: FaculdadeWhereInput | null
    isNot?: FaculdadeWhereInput | null
  }

  export type OpcaoRespostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerguntaCountOrderByAggregateInput = {
    id_pergunta?: SortOrder
    id_faculdade?: SortOrder
    enunciado?: SortOrder
    data_criação?: SortOrder
  }

  export type PerguntaMaxOrderByAggregateInput = {
    id_pergunta?: SortOrder
    id_faculdade?: SortOrder
    enunciado?: SortOrder
    data_criação?: SortOrder
  }

  export type PerguntaMinOrderByAggregateInput = {
    id_pergunta?: SortOrder
    id_faculdade?: SortOrder
    enunciado?: SortOrder
    data_criação?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PerguntaScalarRelationFilter = {
    is?: PerguntaWhereInput
    isNot?: PerguntaWhereInput
  }

  export type OpcaoRespostaCountOrderByAggregateInput = {
    id_opcao_resposta?: SortOrder
    id_pergunta?: SortOrder
    texto_resposta?: SortOrder
    correta?: SortOrder
  }

  export type OpcaoRespostaMaxOrderByAggregateInput = {
    id_opcao_resposta?: SortOrder
    id_pergunta?: SortOrder
    texto_resposta?: SortOrder
    correta?: SortOrder
  }

  export type OpcaoRespostaMinOrderByAggregateInput = {
    id_opcao_resposta?: SortOrder
    id_pergunta?: SortOrder
    texto_resposta?: SortOrder
    correta?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type Usuario_AcertosCountOrderByAggregateInput = {
    id_usuario_acerto?: SortOrder
    id_usuario?: SortOrder
    id_pergunta?: SortOrder
    id_opcao_resposta?: SortOrder
    acertou?: SortOrder
  }

  export type Usuario_AcertosMaxOrderByAggregateInput = {
    id_usuario_acerto?: SortOrder
    id_usuario?: SortOrder
    id_pergunta?: SortOrder
    id_opcao_resposta?: SortOrder
    acertou?: SortOrder
  }

  export type Usuario_AcertosMinOrderByAggregateInput = {
    id_usuario_acerto?: SortOrder
    id_usuario?: SortOrder
    id_pergunta?: SortOrder
    id_opcao_resposta?: SortOrder
    acertou?: SortOrder
  }

  export type FaculdadeCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<FaculdadeCreateWithoutUsuariosInput, FaculdadeUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: FaculdadeCreateOrConnectWithoutUsuariosInput
    connect?: FaculdadeWhereUniqueInput
  }

  export type Usuario_AcertosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Usuario_AcertosCreateWithoutUsuarioInput, Usuario_AcertosUncheckedCreateWithoutUsuarioInput> | Usuario_AcertosCreateWithoutUsuarioInput[] | Usuario_AcertosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Usuario_AcertosCreateOrConnectWithoutUsuarioInput | Usuario_AcertosCreateOrConnectWithoutUsuarioInput[]
    createMany?: Usuario_AcertosCreateManyUsuarioInputEnvelope
    connect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
  }

  export type Usuario_AcertosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Usuario_AcertosCreateWithoutUsuarioInput, Usuario_AcertosUncheckedCreateWithoutUsuarioInput> | Usuario_AcertosCreateWithoutUsuarioInput[] | Usuario_AcertosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Usuario_AcertosCreateOrConnectWithoutUsuarioInput | Usuario_AcertosCreateOrConnectWithoutUsuarioInput[]
    createMany?: Usuario_AcertosCreateManyUsuarioInputEnvelope
    connect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FaculdadeUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<FaculdadeCreateWithoutUsuariosInput, FaculdadeUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: FaculdadeCreateOrConnectWithoutUsuariosInput
    upsert?: FaculdadeUpsertWithoutUsuariosInput
    connect?: FaculdadeWhereUniqueInput
    update?: XOR<XOR<FaculdadeUpdateToOneWithWhereWithoutUsuariosInput, FaculdadeUpdateWithoutUsuariosInput>, FaculdadeUncheckedUpdateWithoutUsuariosInput>
  }

  export type Usuario_AcertosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Usuario_AcertosCreateWithoutUsuarioInput, Usuario_AcertosUncheckedCreateWithoutUsuarioInput> | Usuario_AcertosCreateWithoutUsuarioInput[] | Usuario_AcertosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Usuario_AcertosCreateOrConnectWithoutUsuarioInput | Usuario_AcertosCreateOrConnectWithoutUsuarioInput[]
    upsert?: Usuario_AcertosUpsertWithWhereUniqueWithoutUsuarioInput | Usuario_AcertosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: Usuario_AcertosCreateManyUsuarioInputEnvelope
    set?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    disconnect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    delete?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    connect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    update?: Usuario_AcertosUpdateWithWhereUniqueWithoutUsuarioInput | Usuario_AcertosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: Usuario_AcertosUpdateManyWithWhereWithoutUsuarioInput | Usuario_AcertosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: Usuario_AcertosScalarWhereInput | Usuario_AcertosScalarWhereInput[]
  }

  export type Usuario_AcertosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Usuario_AcertosCreateWithoutUsuarioInput, Usuario_AcertosUncheckedCreateWithoutUsuarioInput> | Usuario_AcertosCreateWithoutUsuarioInput[] | Usuario_AcertosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Usuario_AcertosCreateOrConnectWithoutUsuarioInput | Usuario_AcertosCreateOrConnectWithoutUsuarioInput[]
    upsert?: Usuario_AcertosUpsertWithWhereUniqueWithoutUsuarioInput | Usuario_AcertosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: Usuario_AcertosCreateManyUsuarioInputEnvelope
    set?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    disconnect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    delete?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    connect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    update?: Usuario_AcertosUpdateWithWhereUniqueWithoutUsuarioInput | Usuario_AcertosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: Usuario_AcertosUpdateManyWithWhereWithoutUsuarioInput | Usuario_AcertosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: Usuario_AcertosScalarWhereInput | Usuario_AcertosScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutFaculdadeInput = {
    create?: XOR<UsuarioCreateWithoutFaculdadeInput, UsuarioUncheckedCreateWithoutFaculdadeInput> | UsuarioCreateWithoutFaculdadeInput[] | UsuarioUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFaculdadeInput | UsuarioCreateOrConnectWithoutFaculdadeInput[]
    createMany?: UsuarioCreateManyFaculdadeInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type Faculdade_EmpresaCreateNestedManyWithoutFaculdadeInput = {
    create?: XOR<Faculdade_EmpresaCreateWithoutFaculdadeInput, Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput> | Faculdade_EmpresaCreateWithoutFaculdadeInput[] | Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput | Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput[]
    createMany?: Faculdade_EmpresaCreateManyFaculdadeInputEnvelope
    connect?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
  }

  export type PerguntaCreateNestedManyWithoutFaculdadeInput = {
    create?: XOR<PerguntaCreateWithoutFaculdadeInput, PerguntaUncheckedCreateWithoutFaculdadeInput> | PerguntaCreateWithoutFaculdadeInput[] | PerguntaUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: PerguntaCreateOrConnectWithoutFaculdadeInput | PerguntaCreateOrConnectWithoutFaculdadeInput[]
    createMany?: PerguntaCreateManyFaculdadeInputEnvelope
    connect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutFaculdadeInput = {
    create?: XOR<UsuarioCreateWithoutFaculdadeInput, UsuarioUncheckedCreateWithoutFaculdadeInput> | UsuarioCreateWithoutFaculdadeInput[] | UsuarioUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFaculdadeInput | UsuarioCreateOrConnectWithoutFaculdadeInput[]
    createMany?: UsuarioCreateManyFaculdadeInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type Faculdade_EmpresaUncheckedCreateNestedManyWithoutFaculdadeInput = {
    create?: XOR<Faculdade_EmpresaCreateWithoutFaculdadeInput, Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput> | Faculdade_EmpresaCreateWithoutFaculdadeInput[] | Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput | Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput[]
    createMany?: Faculdade_EmpresaCreateManyFaculdadeInputEnvelope
    connect?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
  }

  export type PerguntaUncheckedCreateNestedManyWithoutFaculdadeInput = {
    create?: XOR<PerguntaCreateWithoutFaculdadeInput, PerguntaUncheckedCreateWithoutFaculdadeInput> | PerguntaCreateWithoutFaculdadeInput[] | PerguntaUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: PerguntaCreateOrConnectWithoutFaculdadeInput | PerguntaCreateOrConnectWithoutFaculdadeInput[]
    createMany?: PerguntaCreateManyFaculdadeInputEnvelope
    connect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutFaculdadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutFaculdadeInput, UsuarioUncheckedCreateWithoutFaculdadeInput> | UsuarioCreateWithoutFaculdadeInput[] | UsuarioUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFaculdadeInput | UsuarioCreateOrConnectWithoutFaculdadeInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutFaculdadeInput | UsuarioUpsertWithWhereUniqueWithoutFaculdadeInput[]
    createMany?: UsuarioCreateManyFaculdadeInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutFaculdadeInput | UsuarioUpdateWithWhereUniqueWithoutFaculdadeInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutFaculdadeInput | UsuarioUpdateManyWithWhereWithoutFaculdadeInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type Faculdade_EmpresaUpdateManyWithoutFaculdadeNestedInput = {
    create?: XOR<Faculdade_EmpresaCreateWithoutFaculdadeInput, Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput> | Faculdade_EmpresaCreateWithoutFaculdadeInput[] | Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput | Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput[]
    upsert?: Faculdade_EmpresaUpsertWithWhereUniqueWithoutFaculdadeInput | Faculdade_EmpresaUpsertWithWhereUniqueWithoutFaculdadeInput[]
    createMany?: Faculdade_EmpresaCreateManyFaculdadeInputEnvelope
    set?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
    disconnect?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
    delete?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
    connect?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
    update?: Faculdade_EmpresaUpdateWithWhereUniqueWithoutFaculdadeInput | Faculdade_EmpresaUpdateWithWhereUniqueWithoutFaculdadeInput[]
    updateMany?: Faculdade_EmpresaUpdateManyWithWhereWithoutFaculdadeInput | Faculdade_EmpresaUpdateManyWithWhereWithoutFaculdadeInput[]
    deleteMany?: Faculdade_EmpresaScalarWhereInput | Faculdade_EmpresaScalarWhereInput[]
  }

  export type PerguntaUpdateManyWithoutFaculdadeNestedInput = {
    create?: XOR<PerguntaCreateWithoutFaculdadeInput, PerguntaUncheckedCreateWithoutFaculdadeInput> | PerguntaCreateWithoutFaculdadeInput[] | PerguntaUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: PerguntaCreateOrConnectWithoutFaculdadeInput | PerguntaCreateOrConnectWithoutFaculdadeInput[]
    upsert?: PerguntaUpsertWithWhereUniqueWithoutFaculdadeInput | PerguntaUpsertWithWhereUniqueWithoutFaculdadeInput[]
    createMany?: PerguntaCreateManyFaculdadeInputEnvelope
    set?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    disconnect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    delete?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    connect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    update?: PerguntaUpdateWithWhereUniqueWithoutFaculdadeInput | PerguntaUpdateWithWhereUniqueWithoutFaculdadeInput[]
    updateMany?: PerguntaUpdateManyWithWhereWithoutFaculdadeInput | PerguntaUpdateManyWithWhereWithoutFaculdadeInput[]
    deleteMany?: PerguntaScalarWhereInput | PerguntaScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutFaculdadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutFaculdadeInput, UsuarioUncheckedCreateWithoutFaculdadeInput> | UsuarioCreateWithoutFaculdadeInput[] | UsuarioUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFaculdadeInput | UsuarioCreateOrConnectWithoutFaculdadeInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutFaculdadeInput | UsuarioUpsertWithWhereUniqueWithoutFaculdadeInput[]
    createMany?: UsuarioCreateManyFaculdadeInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutFaculdadeInput | UsuarioUpdateWithWhereUniqueWithoutFaculdadeInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutFaculdadeInput | UsuarioUpdateManyWithWhereWithoutFaculdadeInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type Faculdade_EmpresaUncheckedUpdateManyWithoutFaculdadeNestedInput = {
    create?: XOR<Faculdade_EmpresaCreateWithoutFaculdadeInput, Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput> | Faculdade_EmpresaCreateWithoutFaculdadeInput[] | Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput | Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput[]
    upsert?: Faculdade_EmpresaUpsertWithWhereUniqueWithoutFaculdadeInput | Faculdade_EmpresaUpsertWithWhereUniqueWithoutFaculdadeInput[]
    createMany?: Faculdade_EmpresaCreateManyFaculdadeInputEnvelope
    set?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
    disconnect?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
    delete?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
    connect?: Faculdade_EmpresaWhereUniqueInput | Faculdade_EmpresaWhereUniqueInput[]
    update?: Faculdade_EmpresaUpdateWithWhereUniqueWithoutFaculdadeInput | Faculdade_EmpresaUpdateWithWhereUniqueWithoutFaculdadeInput[]
    updateMany?: Faculdade_EmpresaUpdateManyWithWhereWithoutFaculdadeInput | Faculdade_EmpresaUpdateManyWithWhereWithoutFaculdadeInput[]
    deleteMany?: Faculdade_EmpresaScalarWhereInput | Faculdade_EmpresaScalarWhereInput[]
  }

  export type PerguntaUncheckedUpdateManyWithoutFaculdadeNestedInput = {
    create?: XOR<PerguntaCreateWithoutFaculdadeInput, PerguntaUncheckedCreateWithoutFaculdadeInput> | PerguntaCreateWithoutFaculdadeInput[] | PerguntaUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: PerguntaCreateOrConnectWithoutFaculdadeInput | PerguntaCreateOrConnectWithoutFaculdadeInput[]
    upsert?: PerguntaUpsertWithWhereUniqueWithoutFaculdadeInput | PerguntaUpsertWithWhereUniqueWithoutFaculdadeInput[]
    createMany?: PerguntaCreateManyFaculdadeInputEnvelope
    set?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    disconnect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    delete?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    connect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    update?: PerguntaUpdateWithWhereUniqueWithoutFaculdadeInput | PerguntaUpdateWithWhereUniqueWithoutFaculdadeInput[]
    updateMany?: PerguntaUpdateManyWithWhereWithoutFaculdadeInput | PerguntaUpdateManyWithWhereWithoutFaculdadeInput[]
    deleteMany?: PerguntaScalarWhereInput | PerguntaScalarWhereInput[]
  }

  export type FaculdadeCreateNestedOneWithoutFaculdadesEmpresasInput = {
    create?: XOR<FaculdadeCreateWithoutFaculdadesEmpresasInput, FaculdadeUncheckedCreateWithoutFaculdadesEmpresasInput>
    connectOrCreate?: FaculdadeCreateOrConnectWithoutFaculdadesEmpresasInput
    connect?: FaculdadeWhereUniqueInput
  }

  export type FaculdadeUpdateOneRequiredWithoutFaculdadesEmpresasNestedInput = {
    create?: XOR<FaculdadeCreateWithoutFaculdadesEmpresasInput, FaculdadeUncheckedCreateWithoutFaculdadesEmpresasInput>
    connectOrCreate?: FaculdadeCreateOrConnectWithoutFaculdadesEmpresasInput
    upsert?: FaculdadeUpsertWithoutFaculdadesEmpresasInput
    connect?: FaculdadeWhereUniqueInput
    update?: XOR<XOR<FaculdadeUpdateToOneWithWhereWithoutFaculdadesEmpresasInput, FaculdadeUpdateWithoutFaculdadesEmpresasInput>, FaculdadeUncheckedUpdateWithoutFaculdadesEmpresasInput>
  }

  export type OpcaoRespostaCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaCreateWithoutPerguntaInput[] | OpcaoRespostaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaCreateOrConnectWithoutPerguntaInput[]
    createMany?: OpcaoRespostaCreateManyPerguntaInputEnvelope
    connect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
  }

  export type Usuario_AcertosCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<Usuario_AcertosCreateWithoutPerguntaInput, Usuario_AcertosUncheckedCreateWithoutPerguntaInput> | Usuario_AcertosCreateWithoutPerguntaInput[] | Usuario_AcertosUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: Usuario_AcertosCreateOrConnectWithoutPerguntaInput | Usuario_AcertosCreateOrConnectWithoutPerguntaInput[]
    createMany?: Usuario_AcertosCreateManyPerguntaInputEnvelope
    connect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
  }

  export type FaculdadeCreateNestedOneWithoutPerguntasInput = {
    create?: XOR<FaculdadeCreateWithoutPerguntasInput, FaculdadeUncheckedCreateWithoutPerguntasInput>
    connectOrCreate?: FaculdadeCreateOrConnectWithoutPerguntasInput
    connect?: FaculdadeWhereUniqueInput
  }

  export type OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaCreateWithoutPerguntaInput[] | OpcaoRespostaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaCreateOrConnectWithoutPerguntaInput[]
    createMany?: OpcaoRespostaCreateManyPerguntaInputEnvelope
    connect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
  }

  export type Usuario_AcertosUncheckedCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<Usuario_AcertosCreateWithoutPerguntaInput, Usuario_AcertosUncheckedCreateWithoutPerguntaInput> | Usuario_AcertosCreateWithoutPerguntaInput[] | Usuario_AcertosUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: Usuario_AcertosCreateOrConnectWithoutPerguntaInput | Usuario_AcertosCreateOrConnectWithoutPerguntaInput[]
    createMany?: Usuario_AcertosCreateManyPerguntaInputEnvelope
    connect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OpcaoRespostaUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaCreateWithoutPerguntaInput[] | OpcaoRespostaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaCreateOrConnectWithoutPerguntaInput[]
    upsert?: OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: OpcaoRespostaCreateManyPerguntaInputEnvelope
    set?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    disconnect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    delete?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    connect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    update?: OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput | OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: OpcaoRespostaScalarWhereInput | OpcaoRespostaScalarWhereInput[]
  }

  export type Usuario_AcertosUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<Usuario_AcertosCreateWithoutPerguntaInput, Usuario_AcertosUncheckedCreateWithoutPerguntaInput> | Usuario_AcertosCreateWithoutPerguntaInput[] | Usuario_AcertosUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: Usuario_AcertosCreateOrConnectWithoutPerguntaInput | Usuario_AcertosCreateOrConnectWithoutPerguntaInput[]
    upsert?: Usuario_AcertosUpsertWithWhereUniqueWithoutPerguntaInput | Usuario_AcertosUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: Usuario_AcertosCreateManyPerguntaInputEnvelope
    set?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    disconnect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    delete?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    connect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    update?: Usuario_AcertosUpdateWithWhereUniqueWithoutPerguntaInput | Usuario_AcertosUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: Usuario_AcertosUpdateManyWithWhereWithoutPerguntaInput | Usuario_AcertosUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: Usuario_AcertosScalarWhereInput | Usuario_AcertosScalarWhereInput[]
  }

  export type FaculdadeUpdateOneWithoutPerguntasNestedInput = {
    create?: XOR<FaculdadeCreateWithoutPerguntasInput, FaculdadeUncheckedCreateWithoutPerguntasInput>
    connectOrCreate?: FaculdadeCreateOrConnectWithoutPerguntasInput
    upsert?: FaculdadeUpsertWithoutPerguntasInput
    disconnect?: FaculdadeWhereInput | boolean
    delete?: FaculdadeWhereInput | boolean
    connect?: FaculdadeWhereUniqueInput
    update?: XOR<XOR<FaculdadeUpdateToOneWithWhereWithoutPerguntasInput, FaculdadeUpdateWithoutPerguntasInput>, FaculdadeUncheckedUpdateWithoutPerguntasInput>
  }

  export type OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaCreateWithoutPerguntaInput[] | OpcaoRespostaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaCreateOrConnectWithoutPerguntaInput[]
    upsert?: OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: OpcaoRespostaCreateManyPerguntaInputEnvelope
    set?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    disconnect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    delete?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    connect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    update?: OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput | OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: OpcaoRespostaScalarWhereInput | OpcaoRespostaScalarWhereInput[]
  }

  export type Usuario_AcertosUncheckedUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<Usuario_AcertosCreateWithoutPerguntaInput, Usuario_AcertosUncheckedCreateWithoutPerguntaInput> | Usuario_AcertosCreateWithoutPerguntaInput[] | Usuario_AcertosUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: Usuario_AcertosCreateOrConnectWithoutPerguntaInput | Usuario_AcertosCreateOrConnectWithoutPerguntaInput[]
    upsert?: Usuario_AcertosUpsertWithWhereUniqueWithoutPerguntaInput | Usuario_AcertosUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: Usuario_AcertosCreateManyPerguntaInputEnvelope
    set?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    disconnect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    delete?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    connect?: Usuario_AcertosWhereUniqueInput | Usuario_AcertosWhereUniqueInput[]
    update?: Usuario_AcertosUpdateWithWhereUniqueWithoutPerguntaInput | Usuario_AcertosUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: Usuario_AcertosUpdateManyWithWhereWithoutPerguntaInput | Usuario_AcertosUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: Usuario_AcertosScalarWhereInput | Usuario_AcertosScalarWhereInput[]
  }

  export type PerguntaCreateNestedOneWithoutOpcoesInput = {
    create?: XOR<PerguntaCreateWithoutOpcoesInput, PerguntaUncheckedCreateWithoutOpcoesInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutOpcoesInput
    connect?: PerguntaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PerguntaUpdateOneRequiredWithoutOpcoesNestedInput = {
    create?: XOR<PerguntaCreateWithoutOpcoesInput, PerguntaUncheckedCreateWithoutOpcoesInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutOpcoesInput
    upsert?: PerguntaUpsertWithoutOpcoesInput
    connect?: PerguntaWhereUniqueInput
    update?: XOR<XOR<PerguntaUpdateToOneWithWhereWithoutOpcoesInput, PerguntaUpdateWithoutOpcoesInput>, PerguntaUncheckedUpdateWithoutOpcoesInput>
  }

  export type UsuarioCreateNestedOneWithoutAcertosInput = {
    create?: XOR<UsuarioCreateWithoutAcertosInput, UsuarioUncheckedCreateWithoutAcertosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAcertosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PerguntaCreateNestedOneWithoutAcertosInput = {
    create?: XOR<PerguntaCreateWithoutAcertosInput, PerguntaUncheckedCreateWithoutAcertosInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutAcertosInput
    connect?: PerguntaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAcertosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAcertosInput, UsuarioUncheckedCreateWithoutAcertosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAcertosInput
    upsert?: UsuarioUpsertWithoutAcertosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAcertosInput, UsuarioUpdateWithoutAcertosInput>, UsuarioUncheckedUpdateWithoutAcertosInput>
  }

  export type PerguntaUpdateOneRequiredWithoutAcertosNestedInput = {
    create?: XOR<PerguntaCreateWithoutAcertosInput, PerguntaUncheckedCreateWithoutAcertosInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutAcertosInput
    upsert?: PerguntaUpsertWithoutAcertosInput
    connect?: PerguntaWhereUniqueInput
    update?: XOR<XOR<PerguntaUpdateToOneWithWhereWithoutAcertosInput, PerguntaUpdateWithoutAcertosInput>, PerguntaUncheckedUpdateWithoutAcertosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FaculdadeCreateWithoutUsuariosInput = {
    id_faculdade?: string
    nome: string
    endereco: string
    faculdadesEmpresas?: Faculdade_EmpresaCreateNestedManyWithoutFaculdadeInput
    perguntas?: PerguntaCreateNestedManyWithoutFaculdadeInput
  }

  export type FaculdadeUncheckedCreateWithoutUsuariosInput = {
    id_faculdade?: string
    nome: string
    endereco: string
    faculdadesEmpresas?: Faculdade_EmpresaUncheckedCreateNestedManyWithoutFaculdadeInput
    perguntas?: PerguntaUncheckedCreateNestedManyWithoutFaculdadeInput
  }

  export type FaculdadeCreateOrConnectWithoutUsuariosInput = {
    where: FaculdadeWhereUniqueInput
    create: XOR<FaculdadeCreateWithoutUsuariosInput, FaculdadeUncheckedCreateWithoutUsuariosInput>
  }

  export type Usuario_AcertosCreateWithoutUsuarioInput = {
    id_usuario_acerto?: string
    id_opcao_resposta: string
    acertou: boolean
    pergunta: PerguntaCreateNestedOneWithoutAcertosInput
  }

  export type Usuario_AcertosUncheckedCreateWithoutUsuarioInput = {
    id_usuario_acerto?: string
    id_pergunta: string
    id_opcao_resposta: string
    acertou: boolean
  }

  export type Usuario_AcertosCreateOrConnectWithoutUsuarioInput = {
    where: Usuario_AcertosWhereUniqueInput
    create: XOR<Usuario_AcertosCreateWithoutUsuarioInput, Usuario_AcertosUncheckedCreateWithoutUsuarioInput>
  }

  export type Usuario_AcertosCreateManyUsuarioInputEnvelope = {
    data: Usuario_AcertosCreateManyUsuarioInput | Usuario_AcertosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FaculdadeUpsertWithoutUsuariosInput = {
    update: XOR<FaculdadeUpdateWithoutUsuariosInput, FaculdadeUncheckedUpdateWithoutUsuariosInput>
    create: XOR<FaculdadeCreateWithoutUsuariosInput, FaculdadeUncheckedCreateWithoutUsuariosInput>
    where?: FaculdadeWhereInput
  }

  export type FaculdadeUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: FaculdadeWhereInput
    data: XOR<FaculdadeUpdateWithoutUsuariosInput, FaculdadeUncheckedUpdateWithoutUsuariosInput>
  }

  export type FaculdadeUpdateWithoutUsuariosInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    faculdadesEmpresas?: Faculdade_EmpresaUpdateManyWithoutFaculdadeNestedInput
    perguntas?: PerguntaUpdateManyWithoutFaculdadeNestedInput
  }

  export type FaculdadeUncheckedUpdateWithoutUsuariosInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    faculdadesEmpresas?: Faculdade_EmpresaUncheckedUpdateManyWithoutFaculdadeNestedInput
    perguntas?: PerguntaUncheckedUpdateManyWithoutFaculdadeNestedInput
  }

  export type Usuario_AcertosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Usuario_AcertosWhereUniqueInput
    update: XOR<Usuario_AcertosUpdateWithoutUsuarioInput, Usuario_AcertosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<Usuario_AcertosCreateWithoutUsuarioInput, Usuario_AcertosUncheckedCreateWithoutUsuarioInput>
  }

  export type Usuario_AcertosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Usuario_AcertosWhereUniqueInput
    data: XOR<Usuario_AcertosUpdateWithoutUsuarioInput, Usuario_AcertosUncheckedUpdateWithoutUsuarioInput>
  }

  export type Usuario_AcertosUpdateManyWithWhereWithoutUsuarioInput = {
    where: Usuario_AcertosScalarWhereInput
    data: XOR<Usuario_AcertosUpdateManyMutationInput, Usuario_AcertosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type Usuario_AcertosScalarWhereInput = {
    AND?: Usuario_AcertosScalarWhereInput | Usuario_AcertosScalarWhereInput[]
    OR?: Usuario_AcertosScalarWhereInput[]
    NOT?: Usuario_AcertosScalarWhereInput | Usuario_AcertosScalarWhereInput[]
    id_usuario_acerto?: StringFilter<"Usuario_Acertos"> | string
    id_usuario?: StringFilter<"Usuario_Acertos"> | string
    id_pergunta?: StringFilter<"Usuario_Acertos"> | string
    id_opcao_resposta?: StringFilter<"Usuario_Acertos"> | string
    acertou?: BoolFilter<"Usuario_Acertos"> | boolean
  }

  export type UsuarioCreateWithoutFaculdadeInput = {
    id_usuario?: string
    nome: string
    email: string
    senha: string
    acertos?: Usuario_AcertosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFaculdadeInput = {
    id_usuario?: string
    nome: string
    email: string
    senha: string
    acertos?: Usuario_AcertosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFaculdadeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFaculdadeInput, UsuarioUncheckedCreateWithoutFaculdadeInput>
  }

  export type UsuarioCreateManyFaculdadeInputEnvelope = {
    data: UsuarioCreateManyFaculdadeInput | UsuarioCreateManyFaculdadeInput[]
    skipDuplicates?: boolean
  }

  export type Faculdade_EmpresaCreateWithoutFaculdadeInput = {
    id_faculdade_?: string
    id_empresa: string
  }

  export type Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput = {
    id_faculdade_?: string
    id_empresa: string
  }

  export type Faculdade_EmpresaCreateOrConnectWithoutFaculdadeInput = {
    where: Faculdade_EmpresaWhereUniqueInput
    create: XOR<Faculdade_EmpresaCreateWithoutFaculdadeInput, Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput>
  }

  export type Faculdade_EmpresaCreateManyFaculdadeInputEnvelope = {
    data: Faculdade_EmpresaCreateManyFaculdadeInput | Faculdade_EmpresaCreateManyFaculdadeInput[]
    skipDuplicates?: boolean
  }

  export type PerguntaCreateWithoutFaculdadeInput = {
    id_pergunta?: string
    enunciado: string
    data_criação: Date | string
    opcoes?: OpcaoRespostaCreateNestedManyWithoutPerguntaInput
    acertos?: Usuario_AcertosCreateNestedManyWithoutPerguntaInput
  }

  export type PerguntaUncheckedCreateWithoutFaculdadeInput = {
    id_pergunta?: string
    enunciado: string
    data_criação: Date | string
    opcoes?: OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput
    acertos?: Usuario_AcertosUncheckedCreateNestedManyWithoutPerguntaInput
  }

  export type PerguntaCreateOrConnectWithoutFaculdadeInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutFaculdadeInput, PerguntaUncheckedCreateWithoutFaculdadeInput>
  }

  export type PerguntaCreateManyFaculdadeInputEnvelope = {
    data: PerguntaCreateManyFaculdadeInput | PerguntaCreateManyFaculdadeInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutFaculdadeInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutFaculdadeInput, UsuarioUncheckedUpdateWithoutFaculdadeInput>
    create: XOR<UsuarioCreateWithoutFaculdadeInput, UsuarioUncheckedCreateWithoutFaculdadeInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutFaculdadeInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutFaculdadeInput, UsuarioUncheckedUpdateWithoutFaculdadeInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutFaculdadeInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutFaculdadeInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id_usuario?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    id_faculdade?: StringFilter<"Usuario"> | string
  }

  export type Faculdade_EmpresaUpsertWithWhereUniqueWithoutFaculdadeInput = {
    where: Faculdade_EmpresaWhereUniqueInput
    update: XOR<Faculdade_EmpresaUpdateWithoutFaculdadeInput, Faculdade_EmpresaUncheckedUpdateWithoutFaculdadeInput>
    create: XOR<Faculdade_EmpresaCreateWithoutFaculdadeInput, Faculdade_EmpresaUncheckedCreateWithoutFaculdadeInput>
  }

  export type Faculdade_EmpresaUpdateWithWhereUniqueWithoutFaculdadeInput = {
    where: Faculdade_EmpresaWhereUniqueInput
    data: XOR<Faculdade_EmpresaUpdateWithoutFaculdadeInput, Faculdade_EmpresaUncheckedUpdateWithoutFaculdadeInput>
  }

  export type Faculdade_EmpresaUpdateManyWithWhereWithoutFaculdadeInput = {
    where: Faculdade_EmpresaScalarWhereInput
    data: XOR<Faculdade_EmpresaUpdateManyMutationInput, Faculdade_EmpresaUncheckedUpdateManyWithoutFaculdadeInput>
  }

  export type Faculdade_EmpresaScalarWhereInput = {
    AND?: Faculdade_EmpresaScalarWhereInput | Faculdade_EmpresaScalarWhereInput[]
    OR?: Faculdade_EmpresaScalarWhereInput[]
    NOT?: Faculdade_EmpresaScalarWhereInput | Faculdade_EmpresaScalarWhereInput[]
    id_faculdade_?: StringFilter<"Faculdade_Empresa"> | string
    id_faculdade?: StringFilter<"Faculdade_Empresa"> | string
    id_empresa?: StringFilter<"Faculdade_Empresa"> | string
  }

  export type PerguntaUpsertWithWhereUniqueWithoutFaculdadeInput = {
    where: PerguntaWhereUniqueInput
    update: XOR<PerguntaUpdateWithoutFaculdadeInput, PerguntaUncheckedUpdateWithoutFaculdadeInput>
    create: XOR<PerguntaCreateWithoutFaculdadeInput, PerguntaUncheckedCreateWithoutFaculdadeInput>
  }

  export type PerguntaUpdateWithWhereUniqueWithoutFaculdadeInput = {
    where: PerguntaWhereUniqueInput
    data: XOR<PerguntaUpdateWithoutFaculdadeInput, PerguntaUncheckedUpdateWithoutFaculdadeInput>
  }

  export type PerguntaUpdateManyWithWhereWithoutFaculdadeInput = {
    where: PerguntaScalarWhereInput
    data: XOR<PerguntaUpdateManyMutationInput, PerguntaUncheckedUpdateManyWithoutFaculdadeInput>
  }

  export type PerguntaScalarWhereInput = {
    AND?: PerguntaScalarWhereInput | PerguntaScalarWhereInput[]
    OR?: PerguntaScalarWhereInput[]
    NOT?: PerguntaScalarWhereInput | PerguntaScalarWhereInput[]
    id_pergunta?: StringFilter<"Pergunta"> | string
    id_faculdade?: StringFilter<"Pergunta"> | string
    enunciado?: StringFilter<"Pergunta"> | string
    data_criação?: DateTimeFilter<"Pergunta"> | Date | string
  }

  export type FaculdadeCreateWithoutFaculdadesEmpresasInput = {
    id_faculdade?: string
    nome: string
    endereco: string
    usuarios?: UsuarioCreateNestedManyWithoutFaculdadeInput
    perguntas?: PerguntaCreateNestedManyWithoutFaculdadeInput
  }

  export type FaculdadeUncheckedCreateWithoutFaculdadesEmpresasInput = {
    id_faculdade?: string
    nome: string
    endereco: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutFaculdadeInput
    perguntas?: PerguntaUncheckedCreateNestedManyWithoutFaculdadeInput
  }

  export type FaculdadeCreateOrConnectWithoutFaculdadesEmpresasInput = {
    where: FaculdadeWhereUniqueInput
    create: XOR<FaculdadeCreateWithoutFaculdadesEmpresasInput, FaculdadeUncheckedCreateWithoutFaculdadesEmpresasInput>
  }

  export type FaculdadeUpsertWithoutFaculdadesEmpresasInput = {
    update: XOR<FaculdadeUpdateWithoutFaculdadesEmpresasInput, FaculdadeUncheckedUpdateWithoutFaculdadesEmpresasInput>
    create: XOR<FaculdadeCreateWithoutFaculdadesEmpresasInput, FaculdadeUncheckedCreateWithoutFaculdadesEmpresasInput>
    where?: FaculdadeWhereInput
  }

  export type FaculdadeUpdateToOneWithWhereWithoutFaculdadesEmpresasInput = {
    where?: FaculdadeWhereInput
    data: XOR<FaculdadeUpdateWithoutFaculdadesEmpresasInput, FaculdadeUncheckedUpdateWithoutFaculdadesEmpresasInput>
  }

  export type FaculdadeUpdateWithoutFaculdadesEmpresasInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutFaculdadeNestedInput
    perguntas?: PerguntaUpdateManyWithoutFaculdadeNestedInput
  }

  export type FaculdadeUncheckedUpdateWithoutFaculdadesEmpresasInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutFaculdadeNestedInput
    perguntas?: PerguntaUncheckedUpdateManyWithoutFaculdadeNestedInput
  }

  export type OpcaoRespostaCreateWithoutPerguntaInput = {
    id_opcao_resposta?: string
    texto_resposta: string
    correta: boolean
  }

  export type OpcaoRespostaUncheckedCreateWithoutPerguntaInput = {
    id_opcao_resposta?: string
    texto_resposta: string
    correta: boolean
  }

  export type OpcaoRespostaCreateOrConnectWithoutPerguntaInput = {
    where: OpcaoRespostaWhereUniqueInput
    create: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput>
  }

  export type OpcaoRespostaCreateManyPerguntaInputEnvelope = {
    data: OpcaoRespostaCreateManyPerguntaInput | OpcaoRespostaCreateManyPerguntaInput[]
    skipDuplicates?: boolean
  }

  export type Usuario_AcertosCreateWithoutPerguntaInput = {
    id_usuario_acerto?: string
    id_opcao_resposta: string
    acertou: boolean
    usuario: UsuarioCreateNestedOneWithoutAcertosInput
  }

  export type Usuario_AcertosUncheckedCreateWithoutPerguntaInput = {
    id_usuario_acerto?: string
    id_usuario: string
    id_opcao_resposta: string
    acertou: boolean
  }

  export type Usuario_AcertosCreateOrConnectWithoutPerguntaInput = {
    where: Usuario_AcertosWhereUniqueInput
    create: XOR<Usuario_AcertosCreateWithoutPerguntaInput, Usuario_AcertosUncheckedCreateWithoutPerguntaInput>
  }

  export type Usuario_AcertosCreateManyPerguntaInputEnvelope = {
    data: Usuario_AcertosCreateManyPerguntaInput | Usuario_AcertosCreateManyPerguntaInput[]
    skipDuplicates?: boolean
  }

  export type FaculdadeCreateWithoutPerguntasInput = {
    id_faculdade?: string
    nome: string
    endereco: string
    usuarios?: UsuarioCreateNestedManyWithoutFaculdadeInput
    faculdadesEmpresas?: Faculdade_EmpresaCreateNestedManyWithoutFaculdadeInput
  }

  export type FaculdadeUncheckedCreateWithoutPerguntasInput = {
    id_faculdade?: string
    nome: string
    endereco: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutFaculdadeInput
    faculdadesEmpresas?: Faculdade_EmpresaUncheckedCreateNestedManyWithoutFaculdadeInput
  }

  export type FaculdadeCreateOrConnectWithoutPerguntasInput = {
    where: FaculdadeWhereUniqueInput
    create: XOR<FaculdadeCreateWithoutPerguntasInput, FaculdadeUncheckedCreateWithoutPerguntasInput>
  }

  export type OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput = {
    where: OpcaoRespostaWhereUniqueInput
    update: XOR<OpcaoRespostaUpdateWithoutPerguntaInput, OpcaoRespostaUncheckedUpdateWithoutPerguntaInput>
    create: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput>
  }

  export type OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput = {
    where: OpcaoRespostaWhereUniqueInput
    data: XOR<OpcaoRespostaUpdateWithoutPerguntaInput, OpcaoRespostaUncheckedUpdateWithoutPerguntaInput>
  }

  export type OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput = {
    where: OpcaoRespostaScalarWhereInput
    data: XOR<OpcaoRespostaUpdateManyMutationInput, OpcaoRespostaUncheckedUpdateManyWithoutPerguntaInput>
  }

  export type OpcaoRespostaScalarWhereInput = {
    AND?: OpcaoRespostaScalarWhereInput | OpcaoRespostaScalarWhereInput[]
    OR?: OpcaoRespostaScalarWhereInput[]
    NOT?: OpcaoRespostaScalarWhereInput | OpcaoRespostaScalarWhereInput[]
    id_opcao_resposta?: StringFilter<"OpcaoResposta"> | string
    id_pergunta?: StringFilter<"OpcaoResposta"> | string
    texto_resposta?: StringFilter<"OpcaoResposta"> | string
    correta?: BoolFilter<"OpcaoResposta"> | boolean
  }

  export type Usuario_AcertosUpsertWithWhereUniqueWithoutPerguntaInput = {
    where: Usuario_AcertosWhereUniqueInput
    update: XOR<Usuario_AcertosUpdateWithoutPerguntaInput, Usuario_AcertosUncheckedUpdateWithoutPerguntaInput>
    create: XOR<Usuario_AcertosCreateWithoutPerguntaInput, Usuario_AcertosUncheckedCreateWithoutPerguntaInput>
  }

  export type Usuario_AcertosUpdateWithWhereUniqueWithoutPerguntaInput = {
    where: Usuario_AcertosWhereUniqueInput
    data: XOR<Usuario_AcertosUpdateWithoutPerguntaInput, Usuario_AcertosUncheckedUpdateWithoutPerguntaInput>
  }

  export type Usuario_AcertosUpdateManyWithWhereWithoutPerguntaInput = {
    where: Usuario_AcertosScalarWhereInput
    data: XOR<Usuario_AcertosUpdateManyMutationInput, Usuario_AcertosUncheckedUpdateManyWithoutPerguntaInput>
  }

  export type FaculdadeUpsertWithoutPerguntasInput = {
    update: XOR<FaculdadeUpdateWithoutPerguntasInput, FaculdadeUncheckedUpdateWithoutPerguntasInput>
    create: XOR<FaculdadeCreateWithoutPerguntasInput, FaculdadeUncheckedCreateWithoutPerguntasInput>
    where?: FaculdadeWhereInput
  }

  export type FaculdadeUpdateToOneWithWhereWithoutPerguntasInput = {
    where?: FaculdadeWhereInput
    data: XOR<FaculdadeUpdateWithoutPerguntasInput, FaculdadeUncheckedUpdateWithoutPerguntasInput>
  }

  export type FaculdadeUpdateWithoutPerguntasInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutFaculdadeNestedInput
    faculdadesEmpresas?: Faculdade_EmpresaUpdateManyWithoutFaculdadeNestedInput
  }

  export type FaculdadeUncheckedUpdateWithoutPerguntasInput = {
    id_faculdade?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutFaculdadeNestedInput
    faculdadesEmpresas?: Faculdade_EmpresaUncheckedUpdateManyWithoutFaculdadeNestedInput
  }

  export type PerguntaCreateWithoutOpcoesInput = {
    id_pergunta?: string
    enunciado: string
    data_criação: Date | string
    acertos?: Usuario_AcertosCreateNestedManyWithoutPerguntaInput
    faculdade?: FaculdadeCreateNestedOneWithoutPerguntasInput
  }

  export type PerguntaUncheckedCreateWithoutOpcoesInput = {
    id_pergunta?: string
    id_faculdade: string
    enunciado: string
    data_criação: Date | string
    acertos?: Usuario_AcertosUncheckedCreateNestedManyWithoutPerguntaInput
  }

  export type PerguntaCreateOrConnectWithoutOpcoesInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutOpcoesInput, PerguntaUncheckedCreateWithoutOpcoesInput>
  }

  export type PerguntaUpsertWithoutOpcoesInput = {
    update: XOR<PerguntaUpdateWithoutOpcoesInput, PerguntaUncheckedUpdateWithoutOpcoesInput>
    create: XOR<PerguntaCreateWithoutOpcoesInput, PerguntaUncheckedCreateWithoutOpcoesInput>
    where?: PerguntaWhereInput
  }

  export type PerguntaUpdateToOneWithWhereWithoutOpcoesInput = {
    where?: PerguntaWhereInput
    data: XOR<PerguntaUpdateWithoutOpcoesInput, PerguntaUncheckedUpdateWithoutOpcoesInput>
  }

  export type PerguntaUpdateWithoutOpcoesInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos?: Usuario_AcertosUpdateManyWithoutPerguntaNestedInput
    faculdade?: FaculdadeUpdateOneWithoutPerguntasNestedInput
  }

  export type PerguntaUncheckedUpdateWithoutOpcoesInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos?: Usuario_AcertosUncheckedUpdateManyWithoutPerguntaNestedInput
  }

  export type UsuarioCreateWithoutAcertosInput = {
    id_usuario?: string
    nome: string
    email: string
    senha: string
    faculdade: FaculdadeCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutAcertosInput = {
    id_usuario?: string
    nome: string
    email: string
    senha: string
    id_faculdade: string
  }

  export type UsuarioCreateOrConnectWithoutAcertosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAcertosInput, UsuarioUncheckedCreateWithoutAcertosInput>
  }

  export type PerguntaCreateWithoutAcertosInput = {
    id_pergunta?: string
    enunciado: string
    data_criação: Date | string
    opcoes?: OpcaoRespostaCreateNestedManyWithoutPerguntaInput
    faculdade?: FaculdadeCreateNestedOneWithoutPerguntasInput
  }

  export type PerguntaUncheckedCreateWithoutAcertosInput = {
    id_pergunta?: string
    id_faculdade: string
    enunciado: string
    data_criação: Date | string
    opcoes?: OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput
  }

  export type PerguntaCreateOrConnectWithoutAcertosInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutAcertosInput, PerguntaUncheckedCreateWithoutAcertosInput>
  }

  export type UsuarioUpsertWithoutAcertosInput = {
    update: XOR<UsuarioUpdateWithoutAcertosInput, UsuarioUncheckedUpdateWithoutAcertosInput>
    create: XOR<UsuarioCreateWithoutAcertosInput, UsuarioUncheckedCreateWithoutAcertosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAcertosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAcertosInput, UsuarioUncheckedUpdateWithoutAcertosInput>
  }

  export type UsuarioUpdateWithoutAcertosInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    faculdade?: FaculdadeUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAcertosInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
  }

  export type PerguntaUpsertWithoutAcertosInput = {
    update: XOR<PerguntaUpdateWithoutAcertosInput, PerguntaUncheckedUpdateWithoutAcertosInput>
    create: XOR<PerguntaCreateWithoutAcertosInput, PerguntaUncheckedCreateWithoutAcertosInput>
    where?: PerguntaWhereInput
  }

  export type PerguntaUpdateToOneWithWhereWithoutAcertosInput = {
    where?: PerguntaWhereInput
    data: XOR<PerguntaUpdateWithoutAcertosInput, PerguntaUncheckedUpdateWithoutAcertosInput>
  }

  export type PerguntaUpdateWithoutAcertosInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
    opcoes?: OpcaoRespostaUpdateManyWithoutPerguntaNestedInput
    faculdade?: FaculdadeUpdateOneWithoutPerguntasNestedInput
  }

  export type PerguntaUncheckedUpdateWithoutAcertosInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    id_faculdade?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
    opcoes?: OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput
  }

  export type Usuario_AcertosCreateManyUsuarioInput = {
    id_usuario_acerto?: string
    id_pergunta: string
    id_opcao_resposta: string
    acertou: boolean
  }

  export type Usuario_AcertosUpdateWithoutUsuarioInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
    pergunta?: PerguntaUpdateOneRequiredWithoutAcertosNestedInput
  }

  export type Usuario_AcertosUncheckedUpdateWithoutUsuarioInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_pergunta?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Usuario_AcertosUncheckedUpdateManyWithoutUsuarioInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_pergunta?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateManyFaculdadeInput = {
    id_usuario?: string
    nome: string
    email: string
    senha: string
  }

  export type Faculdade_EmpresaCreateManyFaculdadeInput = {
    id_faculdade_?: string
    id_empresa: string
  }

  export type PerguntaCreateManyFaculdadeInput = {
    id_pergunta?: string
    enunciado: string
    data_criação: Date | string
  }

  export type UsuarioUpdateWithoutFaculdadeInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    acertos?: Usuario_AcertosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFaculdadeInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    acertos?: Usuario_AcertosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutFaculdadeInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type Faculdade_EmpresaUpdateWithoutFaculdadeInput = {
    id_faculdade_?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
  }

  export type Faculdade_EmpresaUncheckedUpdateWithoutFaculdadeInput = {
    id_faculdade_?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
  }

  export type Faculdade_EmpresaUncheckedUpdateManyWithoutFaculdadeInput = {
    id_faculdade_?: StringFieldUpdateOperationsInput | string
    id_empresa?: StringFieldUpdateOperationsInput | string
  }

  export type PerguntaUpdateWithoutFaculdadeInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
    opcoes?: OpcaoRespostaUpdateManyWithoutPerguntaNestedInput
    acertos?: Usuario_AcertosUpdateManyWithoutPerguntaNestedInput
  }

  export type PerguntaUncheckedUpdateWithoutFaculdadeInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
    opcoes?: OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput
    acertos?: Usuario_AcertosUncheckedUpdateManyWithoutPerguntaNestedInput
  }

  export type PerguntaUncheckedUpdateManyWithoutFaculdadeInput = {
    id_pergunta?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    data_criação?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaCreateManyPerguntaInput = {
    id_opcao_resposta?: string
    texto_resposta: string
    correta: boolean
  }

  export type Usuario_AcertosCreateManyPerguntaInput = {
    id_usuario_acerto?: string
    id_usuario: string
    id_opcao_resposta: string
    acertou: boolean
  }

  export type OpcaoRespostaUpdateWithoutPerguntaInput = {
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    texto_resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OpcaoRespostaUncheckedUpdateWithoutPerguntaInput = {
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    texto_resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OpcaoRespostaUncheckedUpdateManyWithoutPerguntaInput = {
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    texto_resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Usuario_AcertosUpdateWithoutPerguntaInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutAcertosNestedInput
  }

  export type Usuario_AcertosUncheckedUpdateWithoutPerguntaInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Usuario_AcertosUncheckedUpdateManyWithoutPerguntaInput = {
    id_usuario_acerto?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    id_opcao_resposta?: StringFieldUpdateOperationsInput | string
    acertou?: BoolFieldUpdateOperationsInput | boolean
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