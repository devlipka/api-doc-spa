<?php

namespace App\Models;

use Laratrust\Models\Role as RoleModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends RoleModel
{
    use HasFactory;
    public $guarded = [];
}
