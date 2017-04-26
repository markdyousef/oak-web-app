// @flow
type ImgType = 'avatar' | 'grove' | 'seed';
const FILE = 'https://empress.clai.io/files/upload';
const AVATAR = 'https://empress.clai.io/avatars/upload';

const teamId = localStorage.team;

export const uploadImage = (file: Object, type?: ImgType, id?:string):Promise<*> => (
    new Promise((resolve, reject) => {
        if (file.type.indexOf('image/') === 0) {
            let url = FILE;
            const body = new FormData();
            body.append('file', file);
            body.append('teamId', teamId);
            if (type === 'avatar') {
                body.append('type', type);
                url = AVATAR;
            }
            if (type === 'grove') body.append('groveId', id);

            const options = {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-Requested-With': 'badun'
                },
                body
            };
            fetch(url, options)
                .then(res => res.json())
                .then(res => resolve(res.id))
                .catch(err => reject(err));
        } else {
            reject('not a valid image');
        }
    })
);
