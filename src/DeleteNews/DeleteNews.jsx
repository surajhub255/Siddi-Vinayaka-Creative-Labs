import './DeleteNews.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../Model/Model';
import React, { useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import { useNavigate } from 'react-router-dom';

const DeleteNews = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = (news) => {
    setSelectedNews(news);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setModalOpen(false);
  };

  return (
    <div>
      <AdminNav />
      <div className='delete'>
        <div className="table-wrapper">
          <table className='table'>
            <thead>
              <tr>
                <th className='expand'>Title</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='expand'>Election this year</td>
                <td>Active</td>
                <td>
                  <span className='actions'>
                    <DeleteIcon className='delete-btn' />
                    <EditIcon onClick={() => navigate("/updatenews")} />
                  </span>
                </td>
              </tr>
              <tr>
                <td className='expand'>Election this year</td>
                <td>Active</td>
                <td>
                  <span className='actions'>
                    <DeleteIcon className='delete-btn' />
                    <EditIcon onClick={() => navigate("/updatenews")} />
                  </span>
                </td>
              </tr><tr>
                <td className='expand'>Election this year</td>
                <td>Active</td>
                <td>
                  <span className='actions'>
                    <DeleteIcon className='delete-btn' />
                    <EditIcon onClick={() => navigate("/updatenews")} />
                  </span>
                </td>
              </tr><tr>
                <td className='expand'>Election this year</td>
                <td>Active</td>
                <td>
                  <span className='actions'>
                    <DeleteIcon className='delete-btn' />
                    <EditIcon onClick={() => navigate("/updatenews")} />
                  </span>
                </td>
              </tr><tr>
                <td className='expand'>Election this year</td>
                <td>Active</td>
                <td>
                  <span className='actions'>
                    <DeleteIcon className='delete-btn' />
                    <EditIcon onClick={() => navigate("/updatenews")} />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {modalOpen && <Modal news={selectedNews} closeModal={closeModal} />}
    </div>
  );
};

export default DeleteNews;
