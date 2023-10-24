<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    /**
     * Login user
     */
    public function signIn(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8|max:16',
        ]);

        if(!Auth::attempt($request->only('email', 'password'))) {
            return response(['message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();
        $role = $user->roles->first()->name;

        $token = $user->createToken('token')->plainTextToken;
        return response(['token' => $token, 'user' => $user, 'role' => $role]);
    }

    /**
     * Register user
     */
    public function signUp(Request $request)
    {
        $request->validate([
            'firstName' => 'required',
            'password' => 'required|min:8|confirmed|max:16',
            'email' => 'required|email|unique:users',
        ]);

        $user = new User;
        $user->email = $request->email;
        $user->last_Name = $request->lastName;
        $user->first_Name = $request->firstName;
        $user->password = Hash::make($request->password);
        $save = $user->save();
        $user->addRole('user');

        if($save) {
            return response(['message' => 'Account has been successfully registered!']);
        }

        return response(['message' => 'Something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Return user's info
     */
    public function user()
    {
        return Auth::user();
    }

    /**
     * Logout user
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response(['message' => 'Success']);
    }

}
