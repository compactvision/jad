<?php

namespace App\Modules\Member\Domain\Enums;

enum Role: string
{
    // --- ACTEURS DE LA PRODUCTION ---
    case PRODUCTEUR = 'producteur'; // Regroupe éleveurs et agriculteurs
    case ASSOCIATION_COOPERATIVE = 'association_cooperative'; // Représentant d'un groupe de producteurs

    // --- ACTEURS DE LA CHAÎNE DE VALEUR ---
    case FOURNISSEUR_INTRANTS = 'fournisseur_intrants';
    case FOURNISSEUR_MATERIEL = 'fournisseur_materiel';
    case TRANSFORMATEUR = 'transformateur';
    case TRANSPORTEUR = 'transporteur';
    case ACHETEUR_NEGOCIANT = 'acheteur_negociant';
    case DISTRIBUTEUR_DETAIL = 'distributeur_detail';

    // --- SERVICES ET CONSEIL ---
    case EXPERT_CONSEIL = 'expert_conseil'; // Agronome, vétérinaire, consultant
    case FORMATEUR = 'formateur';
    case TECHNICIEN_SEMENCE = 'technicien_semence'; // Relais terrain, agent de développement

    // --- FINANCE ET DÉVELOPPEMENT ---
    case PARTENAIRE_FINANCIER = 'partenaire_financier'; // Banque, IMF, programme de subvention
    case PARTENAIRE_DEVELOPPEMENT = 'partenaire_developpement'; // ONG, projet de coopération

    // --- CONSOMMATEURS ET GROS UTILISATEURS ---
    case GROS_CONSOMMATEUR = 'gros_consommateur'; // École, hôpital, restaurant, hôtel

    // --- ADMINISTRATION ET GESTION ---
    case ADMINISTRATEUR_JAD = 'administrateur_jad'; // Rôle super-admin de la plateforme JAD
    case COLLABORATEUR_JAD = 'collaborateur_jad'; // Employé ou agent de JAD

    public function label(): string
    {
        return match($this) {
            self::PRODUCTEUR => 'Producteur (Éleveur / Agriculteur)',
            self::ASSOCIATION_COOPERATIVE => 'Association / Coopérative',
            self::FOURNISSEUR_INTRANTS => 'Fournisseur d\'Intrants',
            self::FOURNISSEUR_MATERIEL => 'Fournisseur de Matériel',
            self::TRANSFORMATEUR => 'Transformateur',
            self::TRANSPORTEUR => 'Transporteur',
            self::ACHETEUR_NEGOCIANT => 'Acheteur / Négociant',
            self::DISTRIBUTEUR_DETAIL => 'Distributeur au Détail',
            self::EXPERT_CONSEIL => 'Expert / Conseiller',
            self::FORMATEUR => 'Formateur',
            self::TECHNICIEN_SEMENCE => 'Technicien / Relais',
            self::PARTENAIRE_FINANCIER => 'Partenaire Financier',
            self::PARTENAIRE_DEVELOPPEMENT => 'Partenaire de Développement',
            self::GROS_CONSOMMATEUR => 'Gros Consommateur',
            self::ADMINISTRATEUR_JAD => 'Administrateur JAD',
            self::COLLABORATEUR_JAD => 'Collaborateur JAD',
            self::SUPER_ADMIN => 'Super Administrateur',
        };
    }

    /**
     * Retourne une description du rôle pour plus de clarté.
     */
    public function description(): string
    {
        return match($this) {
            self::PRODUCTEUR => 'Producteur direct de biens agricoles ou d\'élevage.',
            self::ASSOCIATION_COOPERATIVE => 'Représente un groupe de producteurs au sein de la plateforme.',
            self::FOURNISSEUR_INTRANTS => 'Vend des semences, engrais, aliments pour bétail...',
            self::FOURNISSEUR_MATERIEL => 'Vend ou loue du matériel agricole.',
            self::TRANSFORMATEUR => 'Valorise les produits bruts en produits transformés.',
            self::TRANSPORTEUR => 'Assure la logistique et le transport des marchandises.',
            self::ACHETEUR_NEGOCIANT => 'Achète les productions pour les revendre ou les exporter.',
            self::DISTRIBUTEUR_DETAIL => 'Vend au détail aux consommateurs finaux.',
            self::EXPERT_CONSEIL => 'Apporte un conseil technique de haut niveau.',
            self::FORMATEUR => 'Dispense des formations et du renforcement des capacités.',
            self::TECHNICIEN_SEMENCE => 'Assure le suivi terrain et l\'appui technique de proximité.',
            self::PARTENAIRE_FINANCIER => 'Propose des solutions de financement et d\'assurance.',
            self::PARTENAIRE_DEVELOPPEMENT => 'Porteur de projet de développement ou d\'appui.',
            self::GROS_CONSOMMATEUR => 'Structure avec des besoins d\'approvisionnement importants et réguliers.',
            self::ADMINISTRATEUR_JAD => 'Gère la plateforme, les membres et les statistiques globales.',
            self::COLLABORATEUR_JAD => 'Employé de JAD, gère des missions spécifiques sur la plateforme.',
        };
    }
}