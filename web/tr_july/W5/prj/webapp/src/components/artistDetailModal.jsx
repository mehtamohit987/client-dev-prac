import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const ArtistDetailModal = ({ modalIsOpen, modalData, closeModal, onEdit, onSubmitEdited }) => (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="detailModal"
        overlayClassName="detailModalOverlay"
        contentLabel="Example Modal"
    >
        <button type="button" className="btn btn-default right-buffer" onClick={closeModal}>
            <span className="glyphicon glyphicon-remove"></span>
        </button>
        <div className="buffer">
            <form>
                <table className="table-hover noborder">
                    <tbody>
                        <tr>
                            <td className="text-success"> Artist Name</td>
                            <td><input type="text" value={modalData.name} onChange={(event) => onEdit(event.target.value, 'name')}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"> Description</td>
                            <td>
                                <textarea rows="8" onChange={(event) => onEdit(event.target.value, 'description')} value={modalData.description} >
                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-success"> Short Description</td>
                            <td>
                                <textarea rows="3" onChange={(event) => onEdit(event.target.value, 'shortDescription')}
                                    value={modalData.shortDescription}
                                >
                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-success"> Image Path</td>
                            <td><input type="text" value={modalData.img} onChange={(event) => onEdit(event.target.value, 'img')}/></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <button type="button" className="btn btn-default left-buffer" role="button" onClick={() => onSubmitEdited()} > Submit details »
                    </button>
                </p>
            </form>
        </div>
    </Modal>
);

ArtistDetailModal.propTypes = {
    modalIsOpen: PropTypes.bool,
    modalData: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onSubmitEdited: PropTypes.func.isRequired,
};

export default ArtistDetailModal;
