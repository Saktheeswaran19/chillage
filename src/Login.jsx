import './stylesheets/login.css'
import logo from './assets/logo.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (provider) => {
        setIsLoading(true);
        setError('');
        
        try {
            // Here you would implement actual authentication logic
            // For now, we'll just simulate a successful login
            await new Promise(resolve => setTimeout(resolve, 1000));
            navigate('/home');
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <img 
                    src={logo} 
                    alt="App Logo" 
                    className="login-logo"
                />
                
                <h1 className="login-title">Login to use the app</h1>
                
                {error && <div className="error-message">{error}</div>}
                
                <div className="login-buttons">
                    <button 
                        type="button" 
                        onClick={() => handleLogin('google')}
                        className="login-button"
                        disabled={isLoading}
                        aria-label="Login with Google"
                    >
                        {isLoading ? 'Loading...' : 'Login with Google'}
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={() => handleLogin('facebook')}
                        className="login-button"
                        disabled={isLoading}
                        aria-label="Login with Facebook"
                    >
                        {isLoading ? 'Loading...' : 'Login with Facebook'}
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={() => handleLogin('phone')}
                        className="login-button"
                        disabled={isLoading}
                        aria-label="Login with Phone Number"
                    >
                        {isLoading ? 'Loading...' : 'Login with Phone Number'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
