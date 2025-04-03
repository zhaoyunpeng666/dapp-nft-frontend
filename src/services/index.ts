import DidService from './did';
import etchClient from './network/etchClient';

class Services {
    did: DidService;

    constructor() {
        this.did = new DidService(etchClient);
    }
}

const services = new Services();
export default services;