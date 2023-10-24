<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MainRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Role::create([
            'name' => 'admin',
            'display_name' => 'admin',
            'description' => 'admin user',
        ]);

        \App\Models\Role::create([
            'name' => 'doc_writer',
            'display_name' => 'Document writer',
            'description' => 'document writer user',
        ]);

         \App\Models\Role::create([
             'name' => 'user',
             'display_name' => 'user',
             'description' => 'simple user',
         ]);
    }
}
