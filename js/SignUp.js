document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('username-error').textContent = '';
    document.getElementById('user-id-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    const username = document.getElementById('username').value.trim();
    const userId = document.getElementById('user-id').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    if (username === '') {
        document.getElementById('username-error').textContent = '사용자 이름을 입력하세요.';
        valid = false;
    }
    if (userId === '') {
        document.getElementById('user-id-error').textContent = '사용자 아이디를 입력하세요.';
        valid = false;
    }
    if (email === '') {
        document.getElementById('email-error').textContent = '이메일을 입력하세요.';
        valid = false;
    }
    if (password === '') {
        document.getElementById('password-error').textContent = '비밀번호를 입력하세요.';
        valid = false;
    }

    if (valid) {
        alert('회원가입이 완료되었습니다!');
    }
});