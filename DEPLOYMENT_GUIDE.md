# Presentation App Deployment Guide

## Overview
This guide covers different options for publishing your presentation app online with various sharing and access control mechanisms.

## Deployment Options

### 1. **Vercel** (Recommended for Quick Start)
**Best for**: Easy deployment, automatic HTTPS, preview deployments

#### Pros:
- Free tier available
- Automatic deployments from GitHub
- Custom domains
- Built-in analytics
- Preview URLs for branches

#### Steps:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy
4. Get instant URL like `https://your-app.vercel.app`

#### Access Control:
- **Basic**: Password protection (Pro plan)
- **Advanced**: Vercel Authentication (Enterprise)

### 2. **Netlify**
**Best for**: Similar to Vercel with great build features

#### Pros:
- Free tier with 100GB bandwidth
- Form handling
- Identity/authentication features
- Split testing

#### Steps:
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Auto-deploy on push
4. URL: `https://your-app.netlify.app`

#### Access Control:
- **Basic**: Password protection (Pro plan)
- **Advanced**: Netlify Identity for user management

### 3. **AWS Amplify**
**Best for**: Enterprise features, AWS integration

#### Pros:
- Built-in authentication with Cognito
- Fine-grained access control
- Global CDN
- Custom domains

#### Steps:
1. Install AWS Amplify CLI
2. `amplify init`
3. `amplify add hosting`
4. `amplify publish`

#### Access Control:
- **Built-in**: AWS Cognito for user auth
- **Advanced**: IAM roles, user groups

### 4. **GitHub Pages** (Free, Public)
**Best for**: Open source, public presentations

#### Pros:
- Completely free
- Easy setup
- Custom domains

#### Cons:
- Public only (no private repos on free tier)
- No server-side auth

#### Steps:
1. Build app: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json:
   ```json
   "homepage": "https://username.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Run `npm run deploy`

## Access Control Strategies

### 1. **Client-Side Protection** (Basic)
```typescript
// Simple password protection
const PasswordProtect = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const checkPassword = () => {
    // Check against environment variable
    if (password === process.env.REACT_APP_ACCESS_PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
    }
  };
  
  if (authenticated) return children;
  
  return (
    <div className="password-screen">
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={checkPassword}>Access</button>
    </div>
  );
};
```

### 2. **URL-Based Access** (Shareable Links)
```typescript
// Generate unique URLs for different access levels
const generateShareableLink = (presentationId: string, accessLevel: string) => {
  const token = generateUniqueToken();
  
  // Store token with permissions in database
  saveAccessToken(token, {
    presentationId,
    accessLevel, // 'view', 'comment', 'edit'
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
  });
  
  return `${BASE_URL}/p/${presentationId}?token=${token}`;
};
```

### 3. **Firebase Authentication** (Recommended for User Management)
```typescript
// Setup Firebase Auth
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  // Your config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Protected route component
const ProtectedPresentation = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
  
  if (!user) return <LoginScreen />;
  return <PresentationView />;
};
```

## Sharing Features Implementation

### 1. **Share Dialog Component**
```typescript
const ShareDialog = ({ presentationId }) => {
  const [shareUrl, setShareUrl] = useState('');
  const [accessType, setAccessType] = useState('view');
  
  const generateLink = () => {
    const url = generateShareableLink(presentationId, accessType);
    setShareUrl(url);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };
  
  return (
    <div className="share-dialog">
      <h3>Share Presentation</h3>
      
      <select value={accessType} onChange={(e) => setAccessType(e.target.value)}>
        <option value="view">View Only</option>
        <option value="comment">Can Comment</option>
        <option value="edit">Can Edit</option>
      </select>
      
      <button onClick={generateLink}>Generate Link</button>
      
      {shareUrl && (
        <div>
          <input value={shareUrl} readOnly />
          <button onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
};
```

### 2. **Access Control Levels**
```typescript
enum AccessLevel {
  PUBLIC = 'public',        // Anyone with link
  RESTRICTED = 'restricted', // Need to be on allowlist
  PRIVATE = 'private'       // Only specific users
}

interface PresentationAccess {
  id: string;
  accessLevel: AccessLevel;
  allowedEmails?: string[];
  password?: string;
  expiresAt?: Date;
}
```

## Recommended Architecture

### For Quick MVP:
1. Deploy to **Vercel** (free)
2. Use **URL tokens** for sharing
3. Store access data in **localStorage** or **Firebase**

### For Production:
1. Deploy to **AWS Amplify** or **Vercel Pro**
2. Use **Firebase Auth** or **Auth0**
3. Implement proper **RBAC** (Role-Based Access Control)
4. Store permissions in **database**

## Environment Variables
```env
# .env.local
REACT_APP_API_URL=https://your-api.com
REACT_APP_ACCESS_PASSWORD=your-password
REACT_APP_FIREBASE_API_KEY=your-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-domain
```

## Security Best Practices

1. **Never store sensitive data in client-side code**
2. **Use HTTPS always**
3. **Implement token expiration**
4. **Log access attempts**
5. **Use environment variables for configs**
6. **Implement rate limiting for auth endpoints**

## Quick Start Commands

```bash
# Vercel deployment
npx vercel --prod

# Netlify deployment
netlify deploy --prod

# AWS Amplify
amplify publish

# GitHub Pages
npm run deploy
```

## Next Steps

1. Choose deployment platform based on needs
2. Implement authentication strategy
3. Add share functionality to UI
4. Test access controls
5. Monitor usage and security

Would you like me to implement any specific deployment or sharing feature?