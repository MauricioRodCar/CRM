import { addNewContact, getContacts, getContactById, updateContact, deleteContact } from '../controllers/crmController'

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) =>{
      console.log("Request from: "+req.originalUrl);
      console.log("Request from: "+req.method);
      next();
    },getContacts)

    .post(addNewContact)

  app.route('/contact/:contactID')

    .get(getContactById)

    .put(updateContact)

    .delete(deleteContact)
}

export default routes;
