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
    public function signIn($request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8|max:16',
        ]);

        if(!Auth::attempt($request->only('email', 'password'))) {
            return response(['message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        $cookie = cookie('jwt', $user->createToken('token')->plainTextToken, 60*24); // 1 day
        return response(['message' => 'success'])->withCookie($cookie);
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
//            Auth::attempt($request->only('email', 'password'));
            Auth::login($user);
            $cookie = cookie('jwt', $user->createToken('token')->plainTextToken, 60*24); // 1 day
            return response(['message' => 'Success', 'data' => $user])->withCookie($cookie);
        } else {
            return response(['message' => 'Something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Return user's info
     */
    public function user(): ?\Illuminate\Contracts\Auth\Authenticatable
    {
        return Auth::user();
    }

    /**
     * Logout user
     */
    public function logout()
    {
        $cookie = Cookie::forget('jwt');
        return response(['message' => 'Success'])->withCookie($cookie);
    }

}
