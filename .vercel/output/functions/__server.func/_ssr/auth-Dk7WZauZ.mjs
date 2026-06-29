import { o as __toESM } from "../_runtime.mjs";
import { A as require_react, k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as sendPasswordResetEmail, c as signOut, i as onAuthStateChanged, n as createUserWithEmailAndPassword, o as signInWithEmailAndPassword, s as signInWithPopup, t as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { t as auth } from "./firebase-BZtSKUGz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Dk7WZauZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)({
	user: null,
	loading: true,
	login: async () => {},
	register: async () => null,
	resetPassword: async () => {},
	logout: async () => {},
	signInWithGoogle: async () => {}
});
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		return onAuthStateChanged(auth, (firebaseUser) => {
			setUser(firebaseUser);
			setLoading(false);
		});
	}, []);
	const login = async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password);
	};
	const register = async (email, password) => {
		return (await createUserWithEmailAndPassword(auth, email, password)).user;
	};
	const resetPassword = async (email) => {
		await sendPasswordResetEmail(auth, email);
	};
	const signInWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		provider.setCustomParameters({ prompt: "select_account" });
		await signInWithPopup(auth, provider);
	};
	const logout = async () => {
		await signOut(auth);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			loading,
			login,
			register,
			resetPassword,
			logout,
			signInWithGoogle
		},
		children
	});
}
var useAuth = () => (0, import_react.useContext)(AuthContext);
//#endregion
export { useAuth as n, AuthProvider as t };
