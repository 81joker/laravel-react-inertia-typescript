<?php

namespace App\Enum;

enum PermissionEnum: string
{
    case MangeFeatures = 'mange_features';
    case MangeUsers = 'mange_users';
    case MangeComments  = 'mange_comments';
    case UpvoteDownvote = 'upvote_downvote';
}
