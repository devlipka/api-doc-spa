<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MainUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'first_name' => 'Gina',
            'last_name' => 'Noire',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password1234')
        ])->roles()->attach(\App\Models\Role::where('name','=','admin')->first()->id);

        \App\Models\User::create([
            'first_name' => 'Adam',
            'last_name' => 'Scott',
            'email' => 'doc_writer@gmail.com',
            'password' => bcrypt('password1234')
        ])->roles()->attach(\App\Models\Role::where('name','=','doc_writer')->first()->id);

        \App\Models\User::create([
            'first_name' => 'Emily',
            'last_name' => 'Doe',
            'email' => 'user@gmail.com',
            'password' => bcrypt('password1234')
        ])->roles()->attach(\App\Models\Role::where('name','=','user')->first()->id);
    }
}
