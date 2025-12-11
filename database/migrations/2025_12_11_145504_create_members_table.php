<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone')->unique();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('avatar')->nullable();
            $table->enum('role', [
                'producteur',
                'association_cooperative',
                'fournisseur_intrants',
                'fournisseur_materiel',
                'transformateur',
                'transporteur',
                'acheteur_negociant',
                'distributeur_detail',
                'expert_conseil',
                'formateur',
                'technicien_semence',
                'partenaire_financier',
                'partenaire_developpement',
                'gros_consommateur',
                'administrateur_jad',
                'collaborateur_jad',
            ]);
            $table->string('province');
            $table->string('city');
            $table->enum('sector', [
                'volaille',
                'elevage_ruminant',
                'cultures_vivrieres',
                'cultures_maraicheres',
                'cultures_permanentes',
                'peche_aquaculture',
                'transformation_agroalimentaire',
                'intrants_agricoles',
                'materiel_agricole',
                'services_veterinaires',
                'transport_logistique',
                'restauration_hotellerie',
                'alimentation_detail',
                'institutions',
                'export_import',
                'finance_assurance',
                'formation_recherche',
                'autre',
            ]);   
            $table->string('activationToken')->nullable();         
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
