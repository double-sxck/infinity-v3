import 'react-toastify/dist/ReactToastify.css';
import { Flip, toast } from "react-toastify";

export const customErrToast = (str: string) => {
    return toast.error(str, {
        position: "top-right",
        autoClose: 1000,
        transition: Flip,
        closeButton: false,
        pauseOnHover: false,
    });
}

export const customSucToast = (str: string) => {
    return toast.success(str, {
        position: "top-right",
        autoClose: 1000,
        transition: Flip,
        closeButton: false,
        pauseOnHover: false,
    });
}


export const customWaitToast = (str: string) => {
    return toast.info(str, {
        position: "top-right",
        autoClose: 1000,
        transition: Flip,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
    });
}