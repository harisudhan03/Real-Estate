
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Login successful!');
      navigate('/home'); // Redirect to the home page after login
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-accent-blue/5 to-accent-teal/5">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg border border-gray-100 animate-fade-in">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-12 h-12 bg-gradient-to-tr from-accent-blue to-accent-teal rounded-xl overflow-hidden transform -rotate-12">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md transform rotate-12"></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-display font-bold text-lianjia-900">Welcome to ZONER</h2>
          <p className="mt-2 text-lianjia-500">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-lianjia-400" />
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-lianjia-200 focus-visible:ring-accent-blue"
                required
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-lianjia-400" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 border-lianjia-200 focus-visible:ring-accent-blue"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-accent-blue focus:ring-accent-blue"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-lianjia-600">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-accent-blue hover:text-accent-teal">
                Forgot password?
              </a>
            </div>
          </div>
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-accent-blue to-accent-teal hover:opacity-90 transition-opacity"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-sm text-lianjia-600">
              Don&apos;t have an account?{" "}
              <a href="#" className="font-medium text-accent-blue hover:text-accent-teal">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
