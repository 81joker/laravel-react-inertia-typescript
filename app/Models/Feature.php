<?php

namespace App\Models;

use App\Models\Upvote;
use App\Models\Comment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
