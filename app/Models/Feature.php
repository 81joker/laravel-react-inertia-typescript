<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Upvote;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Feature extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function upvotes():HasMany
    {
        return $this->hasMany(Upvote::class);
    }
    public function  comments():HasMany
    {
        return $this->hasMany(Comment::class);
    }
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

 

}
