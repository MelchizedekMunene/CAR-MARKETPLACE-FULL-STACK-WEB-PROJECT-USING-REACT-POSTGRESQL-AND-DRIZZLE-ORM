import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock } from "lucide-react";
import Header from '@/components/Header';


function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hardcoded admin credentials
  const ADMIN_EMAIL = 'admin@carmarketplace.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.toLowerCase() === ADMIN_EMAIL) {
      // Store admin status in localStorage
      localStorage.setItem('isAdmin', 'true');
      // Navigate to submit listing page
      navigate('/profile'); // Make sure this route exists
    } else {
      setError('Invalid admin credentials. Please try again.');
    }
  };

  return (
    <div>
      <Header/>
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-md mx-4  bg-green-400">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Lock className="w-5 h-5" />
              Admin Login
            </CardTitle>
            <CardDescription>
              Sign in as an admin to manage vehicle listings
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default AdminLogin;