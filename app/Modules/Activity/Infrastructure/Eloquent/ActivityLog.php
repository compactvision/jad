<?php

namespace App\Modules\Activity\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    protected $table = 'activity_logs';

    protected $fillable = ['user_id', 'action', 'description', 'icon_type'];

    public function user()
    {
        return $this->belongsTo(\App\Modules\Member\Infrastructure\Eloquent\EloquentMember::class, 'user_id');
    }
}
