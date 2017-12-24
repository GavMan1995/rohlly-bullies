import styled from 'styled-components'
import { flexContainer } from '../tools/mixins'

import { smScreen, neutral6, black } from '../tools/variables'

export const Header = styled.div`
  ${flexContainer('space-between', 'center', 'center')}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 56px;
  background-color: ${neutral6};
  box-shadow: 0 0 8px ${black};
  z-index: 1000;

  @media(min-width: 1920px) {
    margin-left: calc(50% - 968px);
    margin-right: calc(50% - 968px);
    border-radius: 0 0 8px 8px;
  }

  @media(max-width: 480px) {
    height: ${smScreen};
  }
`

// .c-header__logo {
//   width: 256px;
//   height: 40px;
//   margin: 8px 16px;

//   @include screen-smaller-than(sm) {
//     width: 180px;
//     height: 28px;
//   }
// }

// .c-logo {
//   width: 100%;
//   height: auto;
// }

// .c-header__hamburger {
//   @include flex-container(center, center, center);
//   width: 56px;
//   height: 56px;
//   margin-right: 16px;
//   padding: 4px;
//   cursor: pointer;
//   transition: transform 0.2s, opacity 0.2s;
//   opacity: 1;

//   &:hover {
//     transform: scale(1.1);
//   }

//   > span {
//     display: block;
//     width: 100%;
//     height: 4px;
//     margin: 4px 0;
//     background-color: $cl-white;
//   }

//   @include screen-smaller-than(sm) {
//     width: 42px;
//     height: 42px;

//     > span {
//       height: 2px;
//       margin: 2px 0;
//     }
//   }

//   &.is-open {
//     transform: translateX(150%);
//     opacity: 0;
//   }
// }

// .c-header__menu {
//   position: absolute;
//   right: 0;
//   top: 0;
//   width: 400px;
//   height: 100vh;
//   background-color: $cl-neutral-6;
//   box-shadow: 0 0 8px 4px $cl-black;
//   transform: translateX(150%);
//   overflow: scroll;
//   opacity: 0;
//   transition: transform 0.2s, opacity 0.2s;

//   &.is-open {
//     transform: translateX(0);
//     opacity: 1;
//   }

//   @include screen-smaller-than(sm) {
//     width: 80%;
//   }
// }

// .c-header-menu__close {
//   width: 100%;
//   height: 56px;
//   padding: 8px 16px;
//   color: $cl-white;
//   text-align: right;
//   cursor: pointer;
// }

// .c-header-menu__link {
//   width: 100%;
//   height: 64px;
//   cursor: pointer;
//   border-bottom: 4px solid $cl-white;
//   transition: border-color 0.2s;

//   > a {
//     display: block;
//     width: 100%;
//     height: 100%;
//     padding-top: 24px;
//     padding-left: 24px;
//     color: $cl-white;
//     transition: color 0.2s;
//   }

//   &:hover {
//     border-color: $cl-green;

//     > a {
//       color: $cl-green;
//     }
//   }
// }
