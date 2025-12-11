<?php

namespace App\Modules\Member\Domain\Enums;

enum Sector: string
{
    // --- PRODUCTION PRIMAIRE ---
    case VOLAILLE = 'volaille';
    case ELEVAGE_RUMINANT = 'elevage_ruminant'; // Bétail, chèvres, moutons
    case CULTURES_VIVRIERES = 'cultures_vivrieres'; // Manioc, maïs, riz, igname
    case CULTURES_MARAICHERES = 'cultures_maraicheres'; // Légumes, tomates, oignons
    case CULTURES_PERMANENTES = 'cultures_permanentes'; // Arbres fruitiers, café, cacao, hévéa
    case PECHE_AQUACULTURE = 'peche_aquaculture'; // Pêche en eau douce et élevage de poissons

    // --- TRANSFORMATION ET SERVICES ---
    case TRANSFORMATION_AGROALIMENTAIRE = 'transformation_agroalimentaire'; // Huilerie, minoterie, conserverie
    case INTRANTS_AGRICOLES = 'intrants_agricoles'; // Vente de semences, engrais, pesticides, aliments bétail
    case MATERIEL_AGRICOLE = 'materiel_agricole'; // Vente et location de matériel (tracteurs, motoculteurs)
    case SERVICES_VETERINAIRES = 'services_veterinaires'; // Cliniques vétérinaires, pharmacies
    case TRANSPORT_LOGISTIQUE = 'transport_logistique'; // Transporteurs de marchandises agricoles

    // --- COMMERCIALISATION ET CONSOMMATION ---
    case RESTAURATION_HOTELLERIE = 'restauration_hotellerie'; // Hôtels, restaurants, snack-bars
    case ALIMENTATION_DETAIL = 'alimentation_detail'; // Épiceries, supermarchés, marchés
    case INSTITUTIONS = 'institutions'; // Écoles, hôpitaux, administrations publiques (pour les appels d'offres)
    case EXPORT_IMPORT = 'export_import'; // Entreprises spécialisées dans l'exportation ou l'importation

    // --- AUTRES ---
    case FINANCE_ASSURANCE = 'finance_assurance'; // Banques, IMF, assurances agricoles
    case FORMATION_RECHERCHE = 'formation_recherche'; // Centres de formation, instituts de recherche
    case AUTRE = 'autre';

    public function label(): string
    {
        return match($this) {
            self::VOLAILLE => 'Volaille',
            self::ELEVAGE_RUMINANT => 'Élevage de Ruminants',
            self::CULTURES_VIVRIERES => 'Cultures Vivrières',
            self::CULTURES_MARAICHERES => 'Cultures Maraîchères',
            self::CULTURES_PERMANENTES => 'Cultures Pérennes (Arboriculture)',
            self::PECHE_AQUACULTURE => 'Pêche & Aquaculture',
            self::TRANSFORMATION_AGROALIMENTAIRE => 'Transformation Agroalimentaire',
            self::INTRANTS_AGRICOLES => 'Intrants Agricoles',
            self::MATERIEL_AGRICOLE => 'Matériel Agricole',
            self::SERVICES_VETERINAIRES => 'Services Vétérinaires',
            self::TRANSPORT_LOGISTIQUE => 'Transport & Logistique',
            self::RESTAURATION_HOTELLERIE => 'Restauration & Hôtellerie',
            self::ALIMENTATION_DETAIL => 'Alimentation au Détail',
            self::INSTITUTIONS => 'Institutions (Écoles, Hôpitaux)',
            self::EXPORT_IMPORT => 'Export & Import',
            self::FINANCE_ASSURANCE => 'Finance & Assurance',
            self::FORMATION_RECHERCHE => 'Formation & Recherche',
            self::AUTRE => 'Autre',
        };
    }

    /**
     * Retourne une description du secteur pour plus de clarté.
     */
    public function description(): string
    {
        return match($this) {
            self::VOLAILLE => 'Élevage de poules, pintades, canards...',
            self::ELEVAGE_RUMINANT => 'Élevage de bovins, caprins, ovins...',
            self::CULTURES_VIVRIERES => 'Production de denrées de base comme le manioc ou le maïs.',
            self::CULTURES_MARAICHERES => 'Production de légumes pour les marchés locaux.',
            self::CULTURES_PERMANENTES => 'Plantations d\'arbres fruitiers, de café, de cacao...',
            self::PECHE_AQUACULTURE => 'Pêche continentale et fermes piscicoles.',
            self::TRANSFORMATION_AGROALIMENTAIRE => 'Transformation des produits agricoles (farine, huile, conserves).',
            self::INTRANTS_AGRICOLES => 'Fourniture de semences, engrais et produits phytosanitaires.',
            self::MATERIEL_AGRICOLE => 'Vente et location de tracteurs et autres équipements.',
            self::SERVICES_VETERINAIRES => 'Santé animale et conseil en élevage.',
            self::TRANSPORT_LOGISTIQUE => 'Transport des produits de la ferme au marché.',
            self::RESTAURATION_HOTELLERIE => 'Acheteurs de produits frais pour la restauration.',
            self::ALIMENTATION_DETAIL => 'Commerces de détail alimentaires.',
            self::INSTITUTIONS => 'Structures ayant des besoins d\'approvisionnement alimentaire.',
            self::EXPORT_IMPORT => 'Acteurs du commerce international des produits agricoles.',
            self::FINANCE_ASSURANCE => 'Services financiers dédiés au secteur agricole.',
            self::FORMATION_RECHERCHE => 'Développement des compétences et de l\'innovation.',
            self::AUTRE => 'Tout autre secteur non listé.',
        };
    }
}