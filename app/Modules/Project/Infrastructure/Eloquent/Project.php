<?php

namespace App\Modules\Project\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';
    
    protected $fillable = ['user_id', 'title', 'description', 'status'];
    
    public function user()
    {
        return $this->belongsTo(\App\Modules\Member\Infrastructure\Eloquent\EloquentMember::class, 'user_id');
    }
}
