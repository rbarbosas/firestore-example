import { credential } from 'firebase-admin';
import { initializeApp, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../../firebase-key.json'

export abstract class FirebaseRepository {
  private repo:FirebaseFirestore.Firestore;
  constructor (private readonly connection = initializeApp({
    credential: credential.cert(serviceAccount as ServiceAccount)
  })) {
    this.repo =  getFirestore();
  }

  getRepository(): FirebaseFirestore.Firestore {
    return this.repo;
  }

  getBatch(): FirebaseFirestore.WriteBatch {
    return this.repo.batch();
  }
}
