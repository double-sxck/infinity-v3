import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const CustomToastContainer = styled(ToastContainer)`
    .Toastify__toast {
        font-size: 2rem;
        border-radius: 6rem;
        padding: 2rem 4rem;
    }

    .Toastify__toast-icon {
        width: 3rem;
        height: 3rem;
    }
`;