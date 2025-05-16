import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css"; // mos harro me e importu CSS-në

export function useAppToast() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "#1e1e2f", // dark background
        color: "#fff", // white text
        iconColor: "#4caf50", // icon color for success (can be overridden)
        customClass: {
            popup: 'colored-toast',
        },
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const showSuccess = (message) => {
        Toast.fire({
            icon: "success",
            title: message,
            iconColor: "#4caf50" // green
        });
    };

    const showWarning = (message) => {
        Toast.fire({
            icon: "warning",
            title: message,
            iconColor: "#ff9800" // orange
        });
    };

    const showError = (message) => {
        Toast.fire({
            icon: "error",
            title: message,
            iconColor: "#f44336" // red
        });
    };

    return { showSuccess, showWarning, showError };
}
