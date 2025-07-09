<?php

namespace App\Enum;

enum PermissionsEnum: string
{
    case MangeFeatures = 'mange_features';
    case MangeUsers = 'mange_users';
    case ManageComments  = 'mange_comments';
    case UpvoteDownvote = 'upvote_downvote';
}
