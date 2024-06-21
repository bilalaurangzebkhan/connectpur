import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}
*::-webkit-scrollbar {
  width: 0.5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

// export const Button = styled.button`
//   border-radius: 4px;
//   background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
//   background: ${({ learnmore }) => (learnmore ? '#2A3D32' : '#0467FB')};
//   display: flex; 
//   align-items: center; 
//   padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
//   color: #fff;
//   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     transition: all 0.3s ease-out;
//     background: #fff;
//     background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
//   }
//   @media screen and (max-width: 960px) {
//     width: 100%;
//   }
// `;

export const Button = styled.button`
border-radius: 4px;
padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
-webkit-font-smoothing: antialiased;
/* Background color based on props */
background: ${({ primary, learnmore }) => {
  if (learnmore) {
    return '#2A3D32';
  } else if (primary) {
    return '#4B59F7';
  } else {
    return '#5CDB95';
  }
}};

/* Hover effect with color swap based on props */
&:hover {
  transition: all 0.3s ease-out;
  background: #fff;
  color: ${({ primary, learnmore }) => {
    if (learnmore) {
      return '#09160F'; // White text for dark learnmore background
    } else if (primary) {
      return '#5CDB95';
    } else {
      return '#4B59F7';
    }
  }};
}

/* Icon styles */
.button-icon {
  margin-right: 10px; /* Adjust spacing between icon and text */
  font-size: 18px; /* Adjust icon size if needed */
}

.submit-icon {
  margin-left: 10px; /* Adjust spacing between icon and text */
  font-size: 18px; /* Adjust icon size if needed */
}

/* Media query for responsive behavior */
@media screen and (max-width: 960px) {
  width: 100%;
}
`;


export default  GlobalStyles;   