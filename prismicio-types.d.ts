// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Configurações documents
 */
interface ConfiguracoesDocumentData {
  /**
   * Site Title field in *Configurações*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Configurações*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Keywords field in *Configurações*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.meta_keywords
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_keywords: prismic.KeyTextField;

  /**
   * OG Image field in *Configurações*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Configurações document from Prismic
 *
 * - **API ID**: `configuracoes`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ConfiguracoesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ConfiguracoesDocumentData>,
    "configuracoes",
    Lang
  >;

/**
 * Item in *Home → Cadastrar redes sociais*
 */
export interface HomeDocumentDataCadastrarRedesSociaisItem {
  /**
   * Ícone social field in *Home → Cadastrar redes sociais*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.cadastrar_redes_sociais[].icone_social
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_social: prismic.ImageField<never>;

  /**
   * Link Social field in *Home → Cadastrar redes sociais*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home.cadastrar_redes_sociais[].link_social
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_social: prismic.LinkField;

  /**
   * Title Social field in *Home → Cadastrar redes sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.cadastrar_redes_sociais[].title_social
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_social: prismic.KeyTextField;
}

type HomeDocumentDataSlicesSlice = never;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Subtitulo field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.subtitulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitulo: prismic.KeyTextField;

  /**
   * Titulo Hero field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.titulo_hero
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_hero: prismic.KeyTextField;

  /**
   * Texto Hero field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.texto_hero
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto_hero: prismic.RichTextField;

  /**
   * Label Button Hero field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.label_button_hero
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_button_hero: prismic.KeyTextField;

  /**
   * Link Button Hero field in *Home*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home.link_button_hero
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_button_hero: prismic.LinkField;

  /**
   * Cadastrar redes sociais field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.cadastrar_redes_sociais[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cadastrar_redes_sociais: prismic.GroupField<
    Simplify<HomeDocumentDataCadastrarRedesSociaisItem>
  >;

  /**
   * thumb trailer field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.thumb_trailer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumb_trailer: prismic.ImageField<never>;

  /**
   * Link Trailer field in *Home*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home.link_trailer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_trailer: prismic.LinkField;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

type PersonagensDocumentDataSlicesSlice = never;

/**
 * Content for Personagens documents
 */
interface PersonagensDocumentData {
  /**
   * Imagem Personagem field in *Personagens*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: personagens.imagem_personagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem_personagem: prismic.ImageField<never>;

  /**
   * Nome Personagem field in *Personagens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: personagens.nome_personagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome_personagem: prismic.KeyTextField;

  /**
   * Descrição Personagem field in *Personagens*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: personagens.descricao_personagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao_personagem: prismic.RichTextField;

  /**
   * Slice Zone field in *Personagens*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: personagens.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PersonagensDocumentDataSlicesSlice> /**
   * Meta Description field in *Personagens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: personagens.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Title field in *Personagens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: personagens.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Personagens document from Prismic
 *
 * - **API ID**: `personagens`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PersonagensDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PersonagensDocumentData>,
    "personagens",
    Lang
  >;

export type AllDocumentTypes =
  | ConfiguracoesDocument
  | HomeDocument
  | PersonagensDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ConfiguracoesDocument,
      ConfiguracoesDocumentData,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataCadastrarRedesSociaisItem,
      HomeDocumentDataSlicesSlice,
      PersonagensDocument,
      PersonagensDocumentData,
      PersonagensDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
