/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { styles } from './Label.styles';
import { Typography } from '@mui/material';

/** input props */
interface LabelProps {
  /** テキスト */
  children: ReactNode;
  /** フォントカラー */
  fontColor?: "normal" | "primary" | "secondary" | "tertiary" | "error";
  /** バリアント */
  variant?: "body1" | "body2" | "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2";
  /** フォントの太さ */
  fontWeight?: "normal" | "bold";
  /** 文字揃え */
  textAlign?: "left" | "center" | "right";
  /** 文字間隔 */
  textSpace?: "narrow" | "normal" | "wide";
  /** フォントスタイル */
  fontStyle?: "normal" | "italic" | "oblique";
  /** ボーダー位置 */
  borderPosition?: "bottom" | "top" | "left" | "right";
  /** ボーダーカラー */
  borderColor?: "normal" | "primary" | "secondary" | "tertiary" | "error";
}

/** Label compornent for Yazaki Corp. systems */
const Label: React.FC<LabelProps> = ({
  children,
  fontColor = "normal",
  variant = "body1",
  fontWeight = "normal",
  textAlign = "center",
  textSpace = "normal",
  fontStyle = "normal",
  borderColor = undefined,
  borderPosition = undefined }) => {
  return (
    <Typography
      css={[
        styles.base,
        styles[`fontColor-${fontColor}`],
        borderPosition === undefined ? undefined : styles[`border-${borderPosition}`],
        borderColor === undefined ? undefined : styles[`border-color-${borderColor}`]
      ]}
      variant={variant}
      fontWeight={fontWeight === "normal" ? "medium" : fontWeight}
      textAlign={textAlign}
      letterSpacing={textSpace === "narrow" ? "-0.10em" : textSpace === "wide" ? "0.20em" : ""}
      fontStyle={fontStyle}
    >
      {children}
    </Typography>
  );
};


export default Label;