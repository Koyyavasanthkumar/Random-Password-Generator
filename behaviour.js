const btnel = document.querySelector('.generate');
const passwordel = document.querySelector('.password');
const copyIcon = document.querySelector('.fa-copy');
const copiedEl = document.querySelector('.copied');

btnel.addEventListener('click', generatePassword);

function generatePassword() {
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:\'",.<>/?~₹$€£¥₩₿';
    const passwordLength = 16;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordel.value = password;
}

// 👉 COPY FUNCTION
copyIcon.addEventListener('click', () => {
    if (!passwordel.value) return;

    navigator.clipboard.writeText(passwordel.value);

    // Show copied password in bottom popup
    copiedEl.textContent = `Copied: ${passwordel.value}`;
    copiedEl.classList.add('active');

    // Hide after 2 seconds
    setTimeout(() => {
        copiedEl.classList.remove('active');
    }, 2000);

});
