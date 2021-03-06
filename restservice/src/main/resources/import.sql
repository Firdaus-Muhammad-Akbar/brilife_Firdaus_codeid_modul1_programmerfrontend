
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (1, 'Aceh');
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (2, 'Sumatera Utara');
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (3, 'Sumatera Barat');
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (4, 'Riau');
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (5, 'Kepulauan Riau');
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (6, 'Jambi');
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (7, 'Bangka Belitung');
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (8, 'Sumatera Selatan');
INSERT INTO `list_propinsi` (`id_propinsi`, `name`) VALUES (9, 'Lampung');

INSERT INTO `list_kontrasepsi` (`id_kontrasepsi`, `name`) VALUES (1, 'Pil');
INSERT INTO `list_kontrasepsi` (`id_kontrasepsi`, `name`) VALUES (2, 'Kondom');
INSERT INTO `list_kontrasepsi` (`id_kontrasepsi`, `name`) VALUES (3, 'IUD');

INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (1, 1, 1, 50);
INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (2, 1, 2, 66);
INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (3, 1, 3, 25);
INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (4, 2, 1, 100);
INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (5, 2, 2, 75);
INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (6, 2, 3, 50);
INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (7, 3, 2, 40);
INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (8, 3, 2, 65);
INSERT INTO `list_pemakai_kontrasepsi` (`id_list`,`propinsi_id_propinsi`, `kontrasepsi_id_kontrasepsi`, `jumlah_pemakai`) VALUES (9, 3, 1, 90);