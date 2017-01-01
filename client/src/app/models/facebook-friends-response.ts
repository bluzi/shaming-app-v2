export interface FacebookFriendsResponse {
    data: FacebookFriend[];
    paging: FacebookPaging;
}

export interface FacebookFriend {
    id: string;
    name: string;
    picture: FacebookPicture
}

export interface FacebookPicture {
    data: FacebookPictureData;
}

export interface FacebookPictureData {
    url: string;
}

export interface FacebookPaging {
    next: string;
}