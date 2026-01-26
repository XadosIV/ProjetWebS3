# HOP Mon site !

## Pour tester le projet, il vous faut l'architecture de la base de données qu'on a utilisé.
Voici comment la créer : 
 ```sql
CREATE DATABASE IF NOT EXISTS hopmonsite CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hopmonsite;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_name (name),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE siteproject (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ownerId INT NOT NULL,
    json LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_ownerId (ownerId),
    INDEX idx_name (name),
    FOREIGN KEY (ownerId) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 ```

## HOP ! Créateur de sites vitrines !

- sites vitrine (= html + css + js)
- possibilité d'export => Zip avec fichiers du site prégénéré

- chaque utilisateur (donc connexion)
	=> peut créer des projets
	=> sauvegarder en cours de fabrication son projet
		(reprise en cours possible)
	=> exportation du projet
	=> importation impossible

## Projet :
Visuellement une page html avec du css
possible de switch entre les pages (système d'onglet)
	=> Qu'est ce qu'on autorise à l'utilisateur?
		h1, p, div, a (interne/externe au site), img/vid (lien) / upload?, tableau, bouton
