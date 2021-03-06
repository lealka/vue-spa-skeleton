export default {
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be greater than 6 characters'
    ]
};
