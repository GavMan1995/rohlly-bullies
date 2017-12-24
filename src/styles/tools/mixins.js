// flex mixins
export const flexContainer = (
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  flexDirection: 'row') => {
  return (
      `display: flex;
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      align-content: ${alignContent};
      flex-direction: ${flexDirection};
      flex-wrap: ${flexWrap};`
  )
}

export const flexItem = (basis: '100px', grow: '1', shrink: '1') => {
  return (
    `flex-basis: ${basis};
    flex-grow: ${grow};
    flex-shrink: ${shrink};`
  )
}

// Media Query Mixin
// @mixin screen-smaller-than($size) {
//   @if $size == 'sm' {
//     @media (max-width: 480px) {@content;}
//   }@else if $size == 'md' {
//     @media (max-width: 960px) {@content;}
//   }@else if $size == 'lg' {
//     @media (max-width: 1200px) {@content;}
//   }@else {
//     @media (max-width: $size) {@content;}
//   }
// }

// @mixin screen-larger-than($size) {
//   @if $size == 'sm' {
//     @media (min-width: 480px) {@content;}
//   }@else if $size == 'md' {
//     @media (min-width: 960px) {@content;}
//   }@else if $size == 'lg' {
//     @media (min-width: 1200px) {@content;}
//   }@else {
//     @media (min-width: $size) {@content;}
//   }
// }
