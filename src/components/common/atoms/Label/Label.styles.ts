import { css } from "@emotion/react";

/** applied style */
export const styles = {
  base: css({
    /** base style */
    fontFamily: [
      'Roboto',
      '"Noto Sans JP"',
      '"Helvetica"',
      'Arial',
      'sans-serif',
    ].join(',')
  }),
  'fontColor-normal': css({
    /** フォントカラー_デフォルト */
    color: '#000000',
  }),
  'fontColor-primary': css({
    /** フォントカラー_プライマリー */
    color: '#2196f3',
  }),
  'fontColor-secondary': css({
    /** フォントカラー_セカンダリー */
    color: '#e91e63',
  }),
  'fontColor-tertiary': css({
    /** フォントカラー_ターシャリー */
    color: '#009688',
  }),
  'fontColor-error': css({
    /** フォントカラー_エラー */
    color: '#f44336',
  }),
  'border-bottom': css({
    /** ボーダー_下部 */
    paddingBottom: '0.2em',
    borderBottom: '0.10em solid'
  }),
  'border-top': css({
    /** ボーダー_上部 */
    paddingTop: '0.2em',
    borderTop: '0.10em solid'
  }),
  'border-left': css({
    /** ボーダー_左部 */
    paddingLeft: '0.4em',
    borderLeft: '0.10em solid'
  }),
  'border-right': css({
    /** ボーダー_右部 */
    paddingRight: '0.4em',
    borderRight: '0.10em solid'
  }),
  'border-color-normal': css({
    /** ボーダーカラー_デフォルト */
    borderColor: '#000000',
  }),
  'border-color-primary': css({
    /** ボーダーカラー_プライマリー */
    borderColor: '#2196f3',
  }),
  'border-color-secondary': css({
    /** ボーダーカラー_セカンダリー */
    borderColor: '#e91e63',
  }),
  'border-color-tertiary': css({
    /** ボーダーカラー_ターシャリー */
    borderColor: '#009688',
  }),
  'border-color-error': css({
    /** ボーダーカラー_エラー */
    borderColor: '#f44336',
  }),


}