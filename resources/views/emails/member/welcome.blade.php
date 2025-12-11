<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue chez Jad Aviculture</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background-color: #2c6e49;
            padding: 20px;
            text-align: center;
        }
        
        .logo {
            max-width: 150px;
            margin-bottom: 10px;
        }
        
        .content {
            padding: 30px;
        }
        
        h1 {
            color: #2c6e49;
            margin-bottom: 20px;
            font-size: 28px;
        }
        
        .welcome-message {
            font-size: 18px;
            margin-bottom: 25px;
            color: #555;
        }
        
        .info-box {
            background-color: #f8f9fa;
            border-left: 4px solid #2c6e49;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .info-box h3 {
            margin-bottom: 10px;
            color: #2c6e49;
        }
        
        .info-list {
            list-style-type: none;
        }
        
        .info-list li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
        }
        
        .info-list li:before {
            content: "•";
            color: #2c6e49;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        .cta-button {
            display: inline-block;
            background-color: #2c6e49;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin: 25px 0;
            transition: background-color 0.3s;
        }
        
        .cta-button:hover {
            background-color: #1e4e2f;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        
        .footer p {
            font-size: 14px;
            color: #6c757d;
        }
        
        .social-links {
            margin-top: 15px;
        }
        
        .social-links a {
            display: inline-block;
            width: 30px;
            height: 30px;
            background-color: #2c6e49;
            color: white;
            text-align: center;
            line-height: 30px;
            border-radius: 50%;
            margin: 0 5px;
            text-decoration: none;
        }
        
        .divider {
            height: 1px;
            background-color: #e9ecef;
            margin: 20px 0;
        }
        
        @media only screen and (max-width: 600px) {
            .content {
                padding: 20px;
            }
            
            h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="{{ asset('logo.png') }}" alt="Jad Aviculture" class="logo">
            <h1 style="color: white; margin-top: 10px;">Bienvenue chez Jad Aviculture</h1>
        </div>
        
        <div class="content">
            <h2>Bienvenue {{ $member->getName() }} !</h2>
            
            <p class="welcome-message">
                Nous sommes ravis de vous accueillir dans la communauté Jad Aviculture. Votre compte a été créé avec succès et vous pouvez maintenant profiter de tous nos services.
            </p>
            
            <div class="info-box">
                <h3>Vos informations de connexion</h3>
                <ul class="info-list">
                    <li><strong>Email :</strong> {{ $member->getEmail() }}</li>
                    <li><strong>Mot de passe :</strong> {{ $plainPassword }}</li>
                </ul>
            </div>
            
            <p>
                Pour commencer, nous vous invitons à accéder à votre profil et à le compléter avec vos informations. Cela nous permettra de vous offrir une expérience personnalisée.
            </p>
            
            @php
                // C'est mieux d'utiliser un nom de route si vous en avez un
                $profileLink = route('profile'); 
                // Si vous n'avez pas de route nommée, gardez l'URL en dur :
                // $profileLink = "https://jadaviculture.com/profile/";
            @endphp
            
            <div style="text-align: center;">
                <a href="{{ $profileLink }}" class="cta-button">
                    Accéder à mon profil
                </a>
            </div>
            
            <div class="divider"></div>
            
            <p style="font-size: 16px; color: #555;">
                <strong>Conseil de sécurité :</strong> Nous vous recommandons de changer votre mot de passe après votre première connexion pour plus de sécurité.
            </p>
        </div>
        
        <div class="footer">
            <p>
                À bientôt sur Jad aviculture,<br>
                L'équipe de Jad aviculture
            </p>
            
            <div class="social-links">
                <a href="#" title="Facebook">f</a>
                <a href="#" title="Twitter">t</a>
                <a href="#" title="LinkedIn">in</a>
            </div>
            
            <p style="margin-top: 15px; font-size: 12px;">
                © {{ date('Y') }} Jad aviculture. Tous droits réservés.<br>
            </p>
        </div>
    </div>
</body>
</html>